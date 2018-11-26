import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
const authUrl = "/auth/";

class UserDrawer extends Component{
  constructor(props){
    super(props);

    this.state={
      hidden: false,
    }
  }

  async logOut() {
    let res = await axios.get(`${authUrl}logout`);
    console.log(res.data.session)
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawerDisplay !== prevProps.drawerDisplay) {
      this.setState({
        hidden: this.props.drawerDisplay
      })
    }
  }

  render(){
    return(
      <div style={!this.state.hidden?{width:"0vw",}:{}}className="preset-drawer">
        <p>user info</p>
        <p>presets</p>
        <Link className="header-items" to="/">
                <button className="login" onClick={this.logOut}>
                  logout
                </button>
              </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserDrawer);