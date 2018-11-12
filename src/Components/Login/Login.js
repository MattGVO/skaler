import React, { Component } from "react";
import "../Home/Home.css";
import skalerbackground from "../../skalerbackground.jpg";
import logo from '../../skaler.svg'

class Login extends Component {
    render() {
      return (
        <div>
          <main>
          <form className="container" >
            <p>
              EMAIL :  
            </p>
            <input type="email"></input>
            <p>
              PASSWORD :  
            </p>
            <input type="password"></input>
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