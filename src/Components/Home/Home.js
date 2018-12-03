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
          <h1 className="login main-logo">SKALER</h1>
          <img className="login main-logo logo-image" src={logo} alt="logo"/>
          <h1 className="tag-line" >Music for the visual learner</h1>
          <Link className="login-button-mobile" to="/login">
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
