import React from "react";
import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';

export default(
  <Switch>
    <Route  exact path="/" component={Home}/>
    <Route  exact path="/about" component={Home}/>
    <Route  exact path="/login" component={Home}/>
    <Route  exact path="/register" component={Home}/>
    <Route  exact path="/tutorial" component={Home}/>
    <Route  exact path="/main" component={Main}/>
    <Route  component={NotFound}/>
  </Switch>
)
