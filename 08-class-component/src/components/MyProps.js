import React, { Component } from 'react';

import MyPropsSub from './MyPropsSub';

class MyProps extends Component {
    render() {
        return (
            <div>
                <h2>MyProps</h2>

                {/* 컴포넌트에게 props 전달하기 (함수형 컴포넌트 사용 시와 동일) */}
                <MyPropsSub />
                <MyPropsSub name="민호" age="19" />
                <MyPropsSub name="수영" age="21" />
            </div>
        );
    }
}

export default MyProps;