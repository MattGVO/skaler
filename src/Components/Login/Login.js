import React, { Component } from "react";
import "../Home/Home.css";
import './Login.css'
import axios from 'axios';
const authUrl = '/auth/'

class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      email: '',
      password: '',
    }
  }

  

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  async login() {
    if (!this.state.email || !this.state.password) return alert('Please fill out email AND password')
    let res = await axios.post(`${authUrl}login`, {
      email: this.state.email,
      password: this.state.password,
    })

    console.log(res.data)
    if (res.data.message === 'loggedIn'){
      this.props.history.push('/main')
    } else {
      alert(res.data.message)
    }
  }  

  async signup() {
    if (!this.state.email || !this.state.password) return alert('Please fill out Email AND Password')
    let res = await axios.post(`${authUrl}signup`, {
        email: this.state.email,
        password: this.state.password
    })

    console.log(res.data)
    if (res.data.message ==='loggedIn') {
        this.props.history.push('/main')
    } else{
        alert(res.data.message)
    }
}

  
    render() {
      
      return (
        <div>
          <form >
            <h1 className="login main-logo">SKALER</h1>
            <p>
              EMAIL :  
            </p>
            <input type="email" name="email" onChange={this.handleChange}></input>
            <p>
              PASSWORD :  
            </p>
            <input type="password" name="password" onChange={this.handleChange}></input>
            <div className="login-buttons">
            <button type ='button' onClick={()=>{this.login()}}>Login</button>
            <button type = 'button' onClick={()=>{this.signup()}}>Signup</button>
            </div>
          </form>
        </div>
  
      );
    }
  }
  
  export default Login;