import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../skaler.svg";
import About from "./About/About";
import Login from "./Login/Login";

class Home extends Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <main>
          <div style={this.props.location.pathname === "/about"?  {height: "90%", width: "75%"}: null} className={this.props.location.pathname !== "/login"? "container" : "login-container"}>
            {this.props.location.pathname === "/" ? (
              <div className="home-container">
                <h1 className="home-title">SKALER</h1>
                <img className="home-logo" src={logo} alt="logo" />
                <h2>Music for the visual learner</h2>
                <div className="home-buttons">
                  <button>About</button>
                  <button onClick={() => this.props.history.push("/login")}>Signup/Login</button>
                </div>
              </div>
            ) : null}
            {this.props.location.pathname === "/about" ? (
                <About />
            ) : null}
            {this.props.location.pathname === "/login" ? (
                <Login history={this.props.history} />
            ) : null}
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
