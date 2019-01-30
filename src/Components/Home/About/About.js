import React, { Component } from "react";
import './About.scss'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-title">Welcome to SKALER!</h1>
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
          <button onClick={() => this.props.history.push("/login")}>Signup/Login</button>
        </div>
      </div>
    );
  }
}

export default About;
