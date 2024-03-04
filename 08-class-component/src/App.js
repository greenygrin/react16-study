// import React from 'react';
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import MyProps from './components/MyProps';
import MyPropTypes from './components/MyPropTypes';
import MyChildren from './components/MyChildren';
import MyState from './components/MyState.js';
import MyRef from './components/MyRef.js';
import MyLifeCycle from './components/MyLifeCycle';
import Department from './components/Department';

// class All extends React.Component {
class App extends Component {
    // InlineCSS를 리턴하기 위한 getter함수 정의
    get myStyle() {
        return {
            fontWeight: 'bold',
            color: '#b82514',
            textDecoration: 'none'
        }
    }

    /**
     * 화면에 렌더링할 JSX 내용을 리턴하는 함수 (rcc + tab key)
     */
    render() {
        return (
            <div>
                <h1>08-class-component</h1>

                {/* NavLink는 현재 머물고 있는 URL에 적용할 CSS를 지정할 수 있다 */}
                <NavLink activeStyle={this.myStyle} to="/myprops">[MyProps]</NavLink>
                <NavLink activeStyle={this.myStyle} to="/myproptypes">[MyPropTypes]</NavLink>
                <NavLink activeStyle={this.myStyle} to="/mychildren">[MyChildren]</NavLink>
                <NavLink activeStyle={this.myState} to="/mystate">[MyState]</NavLink>
                <NavLink activeStyle={this.myStyle} to="/myref">[MyRef]</NavLink>
                <NavLink activeStyle={this.myStyle} to="/mylifecylce">[MyLifeCycle]</NavLink>
                <NavLink activeStyle={this.myStyle} to="/department">[Department]</NavLink>
                <hr />

                <Switch>
                    <Route path="/myprops" component={MyProps} />
                    <Route path="/myproptypes" component={MyPropTypes} />
                    <Route path="/mychildren" component={MyChildren} />
                    <Route path="/mystate" component={MyState} />
                    <Route path="/myref" component={MyRef} />
                    <Route path="/mylifecylce" component={MyLifeCycle} />
                    <Route path="/department" component={Department} />
                </Switch>
            </div>
        );
    }
}

export default App;