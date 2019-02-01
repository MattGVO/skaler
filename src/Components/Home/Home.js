import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.scss";
import logo from "../../skaler.svg";
import Login from "./Login/Login";

class Home extends Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
          <div style={this.props.location.pathname === "/"?  {height: "80vh", width: "55vw", padding: "16px" }: null} className={this.props.location.pathname === "/"? "container" : "login-container"}>
            {this.props.location.pathname === "/" ? (
              <div className="home-container">
                <h1 className="home-title">SKALER</h1>
                <img className="home-logo" src={logo} alt="logo" />
                <h2>Music for the visual learner</h2>
                <div className="about-scroll">
            <h3>It's time to learn music without learning music</h3>
            <hr/>
            <p>
              SKALER is designed to help those who have a desire to learn
              stringed instruments. Whether you have formal musical training or
              not SKALER helps musicians visualize a musical scale on a
              customizable fretboard. Choose a scale, number of strings, the
              number of frets, and your favorite tuning and SKALER will actively
              show what that scale looks like on your board.
            </p>
            <h3>Get Started</h3>
            <hr/>
            <p>
              All you need to do to get started using SKALER is register an
              account and login to start using SKALER free of charge! Once you
              are logged in you can start seeing the scales you want to play.
            </p>
            <h3>Why Should I Signup?</h3>
            <hr/>
          <p>
            You should sign up so you can save all of your favorite tunings.
            Once you are logged in you can save any tuning that you like and
            load it without having to individually change strings everytime.
          </p>
            </div>
                <div className="home-buttons">
                  <button onClick={() => this.props.history.push("/main")}>Fretboard</button>
                  <button onClick={() => this.props.history.push("/login")}>Signup/Login</button>
                </div>
              </div>
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
