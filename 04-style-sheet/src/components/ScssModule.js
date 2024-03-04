import React from 'react';

/** scss 모듈 참조 --> 참조변수 이름을 지정한다 */
import myScssMod from '../assets/scss/style.module.scss';

/**
 * SCSS 모듈 사용하기
 */
const ScssModule = () => {
    return (
        <div>
            <h2>ScssModule</h2>

            <div className={myScssMod.myScss}>
                {/* 역따옴표 또는 배열+join함수로 결합 */}
                <div className={`${myScssMod.myScssBox} ${myScssMod.red}1`} />
                <div className={[myScssMod.myScssBox, myScssMod.green].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.blue].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.orange].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.yellow].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.pink].join(' ')} />
            </div>
        </div>
    );
};

export default ScssModule;