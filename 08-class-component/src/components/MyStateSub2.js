import React, { Component } from 'react';

class MyStateSub2 extends Component {
    // 생성자가 없는 경우는 static값 직접 정의
    state = {
        my_number: 0,
        my_time: new Date().toString()
    };

    /** 이벤트 핸들러 함수 -> 생성자가 없는 경우는 반드시 화살표 함수 형태로 정의 */
    onButtonClick = (e) => {
        // 준비한 state 값에 대한 변경 처리
        // this.state.my_number++;
        // this.state.my_time = new Date().toString();

        // // 변경한 state값을 갱신한다.
        // this.setState(this.state);
        this.setState({
            my_number: this.state.my_number + 1,
            my_time: new Date().toString()
        });
    }

    render() {
        return (
            <div>
                <h3>MyStateSub2</h3>

                <p>
                    {this.state.my_number}회 눌러짐 :
                    <i>
                        <small>{this.state.my_time}</small>
                    </i>
                </p>
                <button onClick={this.onButtonClick}>+1</button>
            </div>
        );
    }
}

export default MyStateSub2;