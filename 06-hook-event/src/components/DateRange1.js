import React from 'react';

/**
 * Date 클래스의 객체를 yyyy-mm-dd 형식의 문자열로 반환하는 함수
 * @param {object} date
 * @param {string} 날짜 문자열
 */
const getDateString = date => {
    if (date === undefined) {
        date = new Date();
    }

    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;  // start 0
    const dd = date.getDate();

    const str = yy + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10? '0' + dd : dd);
    return str;
}

/**
 * useState를 사용하여 날짜 범위 선택 기능 구현
 */
const DateRange1 = () => {
    /**
     * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언
     */
    const [myDate, setMyDate] = React.useState({
        startDate: getDateString(),
        endDate: getDateString()
    });

    return (
        <div>
            <h2>DateRange1</h2>
            <p>{myDate.startDate} ~ {myDate.endDate}</p>
            <p>
                <button
                    type="button"
                    onClick={e => {
                        const today = new Date();
                        const targetDay = new Date();
                        targetDay.setDate(targetDay.getDate() - 7);
                        setMyDate({ startDate: getDateString(targetDay), endDate: getDateString(today) });
                    }}>
                    7일
                </button>
                <button
                    type="button"
                    onClick={e => {
                        const today = new Date();
                        const targetDay = new Date();
                        targetDay.setDate(targetDay.getDate() - 15);
                        setMyDate({ startDate: getDateString(targetDay), endDate: getDateString(today) });
                    }}>
                    15일
                </button>
                <button
                    type="button"
                    onClick={e => {
                        const today = new Date();
                        const targetDay = new Date();
                        targetDay.setMonth(targetDay.getMonth() - 1);
                        setMyDate({ startDate: getDateString(targetDay), endDate: getDateString(today) });
                    }}>
                    1개월
                </button>
                <button
                    type="button"
                    onClick={e => {
                        const today = new Date();
                        const targetDay = new Date();
                        targetDay.setMonth(targetDay.getMonth() - 3);
                        setMyDate({ startDate: getDateString(targetDay), endDate: getDateString(today) });
                    }}>
                    3개월
                </button>
                <button
                    type="button"
                    onClick={e => {
                        const today = new Date();
                        const targetDay = new Date();
                        targetDay.setMonth(targetDay.getMonth() - 6);
                        setMyDate({ startDate: getDateString(targetDay), endDate: getDateString(today) });
                    }}>
                    6개월
                </button>
            </p>
            <hr />
        </div>
    );
};

export default DateRange1;