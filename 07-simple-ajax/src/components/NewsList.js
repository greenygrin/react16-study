import React from 'react';
import NewsItem from './NewsItem';
import {contents} from '../data/NewsContents';
import axios from 'axios';

const NewsList = ({category}) => {
    console.group("NewsList");
    console.debug(category);
    console.debug(contents);
    console.groupEnd();

    // newsData라는 상태값을 생성 --> 초기값은 원소의 수가 0개인 배열
    // setNewsData -> 값을 변경하기 위해 사용하는 함수 (setter)
    const [newsData, setNewsData] = React.useState([]);

    // Ajax 연동 전, 후를 판단하기 위한 boolean값
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        //setNewsData(contents.articles);

        // async -> 이 함수 안에서 동작하는 비동기 처리가 종료될 때까지 실행흐르믈ㅇ 대기시킴
        // async function getNewsList(){}; 와 동일
        const getNewsList = async () => {
            // Ajax 통신 시작을 알림
            setLoading(true);

            // Ajax연동 -> async가 명시된 함수 안에서 비동기 처리 앞에 "await"를 선언
            const result = await axios.get("https://newsapi.org/v2/top-headlines", {
                params: {
                    country: 'kr',
                    apiKey: '527d2b88b1644b8eb38cf9e4c2d16ea7',
                    category: category
                }
            });

            // 받아온 결과값을 상태값에 업데이트
            console.log(result.data);
            setNewsData(result.data.articles);

            setLoading(false);
        };

        getNewsList();
    }, [category]);

    // 로딩 중 메시지 표시
    if (loading) {
        return <h2>Now Loading ...</h2>;
    }

    return (
        <div>
            {/* 기사 데이터 수 만큼 목록의 아이템을 표시함 */}
            {newsData.map((item, index) => (
                // <p key={index}>
                //     {JSON.stringify(item)}
                // </p>
                <NewsItem key={index} item={item} />
            ))}
        </div>
    );
};

export default NewsList;