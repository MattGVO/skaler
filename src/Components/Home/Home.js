import React, { Component } from "react";
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
          <img className="Login Logo" src={logo} alt="logo"/>
          <h1 className="Login" >Music for the visual learner</h1>
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
