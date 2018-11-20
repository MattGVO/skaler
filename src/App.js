import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import logo from "./skaler.svg";
import { Link, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <button
            className="logo-button"
            onClick={() => this.props.history.push("/")}
          >
            <h3 className="header-items">SKALER</h3>
          </button>
          <img className="logo header-items" src={logo} alt="logo" />
          {this.props.location.pathname === "/" ? 
            <Link className="header-items" to="/login">
              <button className="login">login</button>
            </Link>
           : null}
          {this.props.location.pathname === "/main" ? 
            <div className="header-items">
              <button className="logo-button">presets</button>
            <Link className="header-items" to="/">
              <button className="login">logout</button>
            </Link>
            </div>
           : null}
        </header>

        {Routes}
      </div>
    );
  }
}

export default withRouter(App);
