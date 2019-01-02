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
      error:'',
    }
  }

  

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  async login() {
    if (!this.state.email || !this.state.password) this.setState({error:'Please fill out email AND password'})
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
    if (!this.state.email || !this.state.password) return alert(`Please fill out Email AND Password!`)
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
            <h1 className="main-logo">SKALER</h1>
            <p>
              EMAIL :  
            </p>
            <input type="email" name="email" onChange={this.handleChange}></input>
            <p>
              PASSWORD :  
            </p>
            <input type="password" name="password" onChange={this.handleChange}></input>
            <div className="login-buttons">
            <button >About</button>
            <button onClick={()=>{this.signup()}}>Signup</button>
            <button onClick={()=>{this.login()}}>Login</button>
            </div>
            {this.state.error? <p style={{color: "rgb(200,50,50)",textAlign: "center"}}>{this.state.error}!</p>:null}
          </div>
      );
    }
  }
  
  export default Login;