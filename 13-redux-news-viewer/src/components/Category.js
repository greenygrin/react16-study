import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/** 
 * 뉴스 카테고리 종류를 정의
 * name: OpenAPI에 전달할 변수 값
 * text: 페이지에 표시할 메뉴명
 */

const categories = [
    { name: 'all', text: '전체보기' },
    { name: 'business', text: '비지니스' },
    { name: 'entertainment', text: '엔터테인먼트' },
    { name: 'health', text: '건강' },
    { name: 'science', text: '과학' },
    { name: 'sports', text: '스포츠' },
    { name: 'technology', text: '기술' }
];

/** 메뉴를 구성할 목록정의 태그 */
const CategoryList = styled.ul`
    list-style:none; padding:0; margin:0;
    &:after { content:''; display:block; clear:both; float:none; }
`;

/** 메뉴를 구성할 목록정의 항목 */
const CategoryListItem = styled.li`
    float:left;
    &:after { content:'|'; padding:0 15px; }
    &:last-child:after { content: ''; }
`;

/** 카테고리 링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS적용 */
const CategoryItemLink = styled(NavLink)`
    font-size:20px; cursor:pointer; text-decoration:none; padding-bottom:2px; color:#222;
    &:hover { color:#495057; } /** &:hover CSS의 가상클랙스 hover */
    /** &.active NavLink의 active기능 호출 -> URL이 현재 메뉴를 가르키는 경우 */
    &.active { font-weight:bold; border-bottom:2px solid #22b8cf; color:#22b8cf;
        &:hover { color:#3bc9db; }
    }
`;

const Category = () => {
    return (
        <CategoryList>
            {categories.map( (currentValue, index) => (
                <CategoryListItem key={index}>
                    <CategoryItemLink
                        // 현재 페이지와 링크가 일치하는 경우 적용될 클래스이름
                        activeClassName="active"
                        // true로 적용될 경우 기본 페이지
                        // --> 반복문에서 처리중인 배열 원소의 name값이 'all'이면 true 출력
                        exact={currentValue.name === 'all'}
                        // 클릭 시 이동할 링크
                        to={currentValue.name === 'all' ? '/' : '/' + currentValue.name}>
                        {currentValue.text}
                    </CategoryItemLink>
                </CategoryListItem>
            ))}
        </CategoryList>
    );
};

export default Category;