import React, { Component } from "react";
import "../Home/Home.css";
import skalerbackground from "../../skalerbackground.jpg";
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
      return (
        <div>
          <main>
          <form className="container" >
            <h1 className="Login Logo">SKALER</h1>
            <p>
              EMAIL :  
            </p>
            <input type="email"></input>
            <p>
              PASSWORD :  
            </p>
            <input type="password"></input>
            <Link to="/main">
            <button type ='button'>Login</button>
            </Link>
          </form>
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
  
  export default Login;