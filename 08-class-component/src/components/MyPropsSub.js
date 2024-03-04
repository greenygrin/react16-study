import React, { Component } from 'react';

class MyPropsSub extends Component {
    // 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
    static defaultProps = {
        name: 'unknown',
        age: 0
    };

    render() {
        // "this.props.사용자지정변수" 형식으로 값에 접근할 수 있다.
        console.group("MyPropsSub");
        console.dir(this.props);
        console.groupEnd();

        return (
                <div>
                <h3>MyPropsSub</h3>

                <p>제 이름은 <b>{this.props.name}</b>이고, 나이는 <b>{this.props.age}</b>입니다.</p>
            </div>
        );
    }
}

export default MyPropsSub;