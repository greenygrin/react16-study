import React, { Component } from 'react';

import MyStateSub1 from './MyStateSub1';
import MyStateSub2 from './MyStateSub2';

class MyState extends Component {
    render() {
        return (
            <div>
                <h2>MyState</h2>
                <MyStateSub1 />
                <MyStateSub2 />
            </div>
        );
    }
}

export default MyState;