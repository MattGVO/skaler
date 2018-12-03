import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Home.css";
import skalerbackground from "../../skalerbackground.jpg";
import logo from '../../skaler.svg'

class Home extends Component {
    render() {
      
      return (
        <div>
          <main>
          <div className="container">
          <h1 className="Login Logo">SKALER</h1>
          <img className="Login Logo logo-image" src={logo} alt="logo"/>
          <h1 className="Login" >Music for the visual learner</h1>
          <Link className="header-items login-button-mobile" to="/login">
          <button  className="login">login</button>
        </Link>
          </div>
          <img
            className="login-image"
            src={skalerbackground}
            alt="login background"
          />
        </main>
        </div>
  
      );
    }
  }
  
  export default Home;
