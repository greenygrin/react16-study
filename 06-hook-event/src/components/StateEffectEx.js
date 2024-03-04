import React from 'react';

// React 안에서 jQuery 사용할 때 (실제로는 거의 사용안함)
// ajax 연동을 위해서 jQuery를 사용하기에는 사용하지 않는 소스가 너무 많아 무겁고, ajax 기능만 구현된 라이브러리 사용 (axios 추천)
import $ from 'jquery';

const StateEffectEx = () => {

    /** 화면에 표시할 상태값 -> 초기값을 빈 배열로 정의 */
    const [department, setDepartment] = React.useState([]);

    /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행 */
    React.useEffect(() => {
        $.get('http://itpaper.co.kr/demo/react/api/dept_list.php', json => {
            console.log(json);
            setDepartment(json.item);
        });
    }, []);

    return (
        <div>
            <h2>StateEffectEx</h2>

            {department.map((item, index) => {
                return (
                        <div key={item.deptno}>
                        <h3>{item.dname}</h3>
                        <p>학과번호: {item.deptno} / 학과위치: {item.loc}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default StateEffectEx;