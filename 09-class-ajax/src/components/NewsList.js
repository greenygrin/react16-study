import React, { Component } from 'react';
import axios from 'axios';
//import { contents } from '../data/NewsContents';
import NewsItem from './NewsItem';

class NewsList extends Component {
    /** 상태값 */
    state = {
        newsData: [],   // 뉴스 목록을 저장할 배열
        loading: false  // Ajax 연동 전,후를 판단하기 위한 boolean값
    };

    /** 컴포넌트가 화면에 표시될 때 실행되는 라이프사이클 메서드 (데이터 불러오기) */
    // componentDidUpdate() { --> 로 구현하면 무한루프에 빠짐
    componentDidMount() {
        console.log('componentDidMount');
        // 외부 파일로 정의해 둔 샘플 데이터를 상태값에 연결(임시용)
        // this.setState({ newsData: contents.articles });

        // async -> 이 함수 안에서 동작하는 비동기 처리가 종료될 때까지 실행흐름을 대기시킴
        // async function getNewsList() {
        const getNewsList = async () => {
            // Ajax 통신 시작을 알림
            this.setState({loading: true});

            // Ajax연동 -> async가 명시된 함수 안에서 비동기 처리 앞에 "await"를 선언
            const result = await axios.get("https://newsapi.org/v2/top-headlines", {
                params: {
                    country: 'kr',
                    apiKey: '527d2b88b1644b8eb38cf9e4c2d16ea7',
                    category: this.props.category
                }
            });

            // 받아온 결과값을 상태값에 업데이트
            console.log(result.data);

            this.setState({ newsData: result.data.articles, loading: false });
        };

        getNewsList();
    }

    /**
     * 최초 화면 구현될 때 componentDidMount()
     * 메뉴 선택 시 componentDidUpdate() - 갱신만 됨
     * 이전 값을 전달해 다른 메뉴 선택 시 componentDidMount()가 다시 실행되도록 아래 함수 필요
     */

    /**
     * 컴포넌트 상태가 변경될 때 자동으로 호출되는 함수
     * (중요) 이전 속성값(prevProps)나 이전 상태값(prevProps)가 현재 값과 달라질 때에만 처리하도록 if문을 사용해야 한다.
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.category !== this.props.category) {
            this.componentDidMount();
        }
    }

    render() {
        // 상태값의 원소들을 복사한다.
        const { newsData, loading } = this.state;

        // 로딩중 메시지 표시
        if (loading) { return <h2>Now Loading ...</h2>; }

        return (
            <div>
                {/* 기사 데이터 수 만큼 목록의 아이템을 표시함 */}
                {newsData.map((item, index) => (
                    // <p key={index}>{JSON.stringify(item)}</p>
                    <NewsItem key={index} item={item} />
                ))}
            </div>
        );
    }
}

export default NewsList;