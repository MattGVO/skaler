import React, { Component } from "react";
import "./App.css";
import Routes from './Routes'
import logo from './skaler.svg'
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    console.log()
    return (
      
      <div className="App">
        <header>
          <h2 className="header-items">SKALER</h2>
          <img className = "logo header-items" src={logo} alt="logo" />
          <Link  className="header-items"to="/login">
          <button className="login">login</button>
          </Link>
        </header>
        
        {Routes}

        {/* <main>
          <div className="Login-container">
          <h1 className="Login Logo">SKALER</h1>
          <h1 className="Login" >Music for the visual learner</h1>
          <h1 className="Login" >login</h1>
          </div>
          <img
            className="login-image"
            src={skalerbackground}
            alt="login background"
          />
        </main> */}
      </div>
    );
  }
}

export default App;
