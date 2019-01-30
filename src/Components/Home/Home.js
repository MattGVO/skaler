import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.scss";
import logo from "../../skaler.svg";
import About from "./About/About";
import Login from "./Login/Login";

class Home extends Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
          <div style={this.props.location.pathname === "/about"?  {height: "80vh", width: "55vw" }: null} className={this.props.location.pathname === "/"? "container" : "login-container"}>
            {this.props.location.pathname === "/" ? (
              <div className="home-container">
                <h1 className="home-title">SKALER</h1>
                <img className="home-logo" src={logo} alt="logo" />
                <h2>Music for the visual learner</h2>
                <div className="home-buttons">
                  <button onClick={() => this.props.history.push("/about")}>About</button>
                  <button onClick={() => this.props.history.push("/login")}>Signup/Login</button>
                </div>
              </div>
            ) : null}
            {this.props.location.pathname === "/about" ? (
                <About history={this.props.history}/>
            ) : null}
            {this.props.location.pathname === "/login" ? (
                <Login history={this.props.history} />
            ) : null}
          </div>
      </div>
    );
  }
}

export default Home;
