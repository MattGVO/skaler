import React from "react";
import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

export default(
  <Switch>
    <Route  exact path="/" component={Home}/>
    <Route  path="/about" component={Home}/>
    <Route  path="/login" component={Home}/>
    <Route  path="/register" component={Home}/>
    <Route  path="/tutorial" component={Home}/>
    <Route  path="/main" component={Main}/>
    <Route render={() => <div>Oops! That's not a valid route.</div>} />
  </Switch>
)
