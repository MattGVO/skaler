import React from "react";
import {Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Main from './Components/Main/Main'

export default(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/main" component={Main}/>
  </Switch>
)
