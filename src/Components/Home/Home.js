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
    console.log(this.props.location.pathname);
    return (
      <div>
        <main>
          <div className={this.props.location.pathname === "/login"? "container test": "container"}>
            {this.props.location.pathname === "/" ? (
              <div className="home-container">
                <h1 className="login main-logo">SKALER</h1>
                <img
                  className="login main-logo logo-image"
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
              <div>
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
