import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import skalerbackground from "../../skalerbackground.jpg";
import logo from "../../skaler.svg";
import About from "../About/About";
import Login from "../Login/Login";
import Register from "../Register/Register";

class Home extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>
        <main>
          <div className={this.props.location.pathname === "/login"? "login-container": "container"}>
            {this.props.location.pathname === "/" ? (
              <div className="home-container">
                <h1 className="main-logo">SKALER</h1>
                <img
                  className="main-logo"
                  src={logo}
                  alt="logo"
                />
                <h1 className="tag-line">Music for the visual learner</h1>
              </div>
            ) : null}
            {this.props.location.pathname === "/about" ? (
              <div className="about-container">
                <About />
              </div>
            ) : null}
            {this.props.location.pathname === "/login" ? (
              <div className="form">
                <Login/>
              </div>
            ) : null}
            {this.props.location.pathname === "/register" ? (
              <div>
                <Register/>
              </div>
            ) : null}
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
