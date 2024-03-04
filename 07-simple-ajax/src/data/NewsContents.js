/** Ajax 연동 적용 전 임시로 사용할 컨텐츠 구조 */
const contents = {
    articles: [
        {
            urlToImage: 'https://via.placeholder.com/150?text=image1',
            url: 'https://news.naver.com',
            title: 'Naver News',
            description: '네이버 뉴스로 이동합니다.'
        },
        {
            urlToImage: 'https://via.placeholder.com/150?text=image2',
            url: 'https://news.daum.net',
            title: 'Daum News',
            description: '다음 뉴스로 이동합니다.'
        }
    ]
};

export { contents };

/**
 * export {foo1, foo2 ...}
 * import {foo1, foo2 ...}
 * --> 이름 일치해야 함
 * --> 함수, 변수 등에만 사용
 * 
 * export default HelloWolrd
 * import 사용자정의이름 from '파일위치'
 * --> 클래스 대표 객체
 * 
 * 하나의 js 파일당 default는 하나만, {}는 여러 대상을 내보낼 수 있다
 */