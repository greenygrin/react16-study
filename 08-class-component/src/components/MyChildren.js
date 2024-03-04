import React, { Component } from 'react';

import MyChildrenSub from './MyChildrenSub';

class MyChildren extends Component {
    render() {
        return (
            <div>
                <h2>MyChildren</h2>

                {/* props 전달시 문자열 이외의 데이터타입은 중괄호로 묵어야함 (""는 string으로 인식) */}
                <MyChildrenSub width={400} height={100}>Hello World</MyChildrenSub>

                <MyChildrenSub width={300} height={80}>안녕 React</MyChildrenSub>

                <MyChildrenSub width={200} height={50} />
            </div>
        );
    }
}

export default MyChildren;