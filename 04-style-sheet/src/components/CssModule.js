import React from 'react';

/** CSS 모듈 참조 --> 참조변수 이름을 지정한다. */
import myStyles from '../assets/css/mystyle.module.css'; //stylesheet의 클래스명이 모두 변수화된다

const CssModule = () => {
    return (
        <div>
            <h2>myStyles</h2>

            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={myStyles.myCssBox} />

            <h3>독립 클래스</h3>
            <div className="myBorderBox" />

            <h3>다중 클래스 적용 (1) - 역따옴표 사용</h3>
            <div className={`${myStyles.size} ${myStyles.bg}`} />

            <h3>다중 클래스 적용 (2) - 배열로 구성한 후 join함수로 결합</h3>
            <div className={[myStyles.size, myStyles.bg].join(' ')} />  {/* 꼭 띄어써야함 */}
        </div>
    );
};

export default CssModule;