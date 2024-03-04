import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import './assets/css/style.css';
import MyState from "./components/MyState";
import DateRange1 from "./components/DateRange1";
import MyEffect from "./components/MyEffect";
import StateEffectEx from "./components/StateEffectEx";
import MyReducer1 from "./components/MyReducer1";
import DateRange2 from "./components/DateRange2";
import MyRef from "./components/MyRef";
import MyCallback from "./components/MyCallback";
import MyMemo from "./components/MyMemo";

const App = () => {
    return (
        <div>
            <h1>06-hook-event</h1>

            <NavLink className="normalLink" activeClassName="activeLink" to="/mystate">[MyState]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/daterange1">[DateRange1]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/myeffect">[MyEffect]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/state_effect_ex">[StateEffectEx]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/myreducer1">[MyReducer1]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/daterange2">[DateRange2]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/myref">[MyRef]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/mycallback">[MyCallback]</NavLink>
            <NavLink className="normalLink" activeClassName="activeLink" to="/mymemo">[MyMemo]</NavLink>
            <hr />

            <Switch>
                <Route path="/mystate" component={MyState} />
                <Route path="/daterange1" component={DateRange1} />
                <Route path="/myeffect" component={MyEffect} />
                <Route path="/state_effect_ex" component={StateEffectEx} />
                <Route path="/myreducer1" component={MyReducer1} />
                <Route path="/daterange2" component={DateRange2} />
                <Route path="/myref" component={MyRef} />
                <Route path="/mycallback" component={MyCallback} />
                <Route path="/mymemo" component={MyMemo} />
            </Switch>
        </div>
    );
};

export default App;