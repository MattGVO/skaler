import React, { Component } from 'react';

class Register extends Component{
    constructor(props){
        super(props);
    
        this.state={
          email: '',
          password: '',
        }
        this.handleChange = this.handleChange.bind(this)
      }

    handleChange(e) {this.setState({ [e.target.name]: e.target.value });}
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Register;