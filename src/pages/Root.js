import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './Home/Home'

const Root = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:id" component={Home}/>
        </Switch>
    )
}
export default Root;