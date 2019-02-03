import React, { Component } from "react";
import "./Logincss";
// import { Link } from "react-router-dom";
import axios from "axios";
const authUrl = "/auth/";

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      error: "",
      email: "",
      password:"",
    }
    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this)
  }


handleChange = e => {
  this.setState({
    [e.target.name]:e.target.value
  })
}

async login(){
  if(this.state.email && this.state.password){
    let res = await axios.post(`${authUrl}login`, {email: this.state.email, password: this.state.password})
    if(res.data.message === "loggedIn"){
      this.props.history.push("/main")
    }
    this.setState({
      error: res.data.message
    })
  }else{
    this.setState({
      error: "Please fill out Email AND password"
    })
  }
}

async signup(){
  if(this.state.email && this.state.password){
    let res = await axios.post(`${authUrl}signup`, {email: this.state.email, password: this.state.password})
    if(res.data.message === "loggedIn"){
      this.props.history.push("/main")
    }
    this.setState({
      error: res.data.message
    })
  }else{
    this.setState({
      error: "Please fill out Email AND password"
    })
  }
}



  render() {
    return (
      <div className="form">
          <h1 className="home-title">SKALER</h1>
        <p>EMAIL :</p>
        <input type="email" name="email" onChange={this.handleChange} />
        <p>PASSWORD :</p>
        <input type="password" name="password" onChange={this.handleChange} />
        <div className="home-buttons">
          {/* <button onClick={() => this.props.history.push("/about")}>About</button> */}
          <button onClick={this.signup}>Signup</button>
          <button onClick={this.login}>Login</button>
        </div>
        {this.state.error ? (
            <p
              style={{
                color: "orange",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              *{this.state.error}!
            </p>
          ) : (
            <p style={{ visibility: "hidden", fontSize: "16px" }}>.</p>
          )}
      </div>
    );
  }
}

export default Login;
