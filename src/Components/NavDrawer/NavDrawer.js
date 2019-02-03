import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./NavDrawercss";
import { updateUser, updateTuningName } from "../../ducks/reducer";
import { NavLink } from "react-router-dom";
const authUrl = "/auth/";

class UserDrawer extends Component {
  async logout() {
    await axios.get(`${authUrl}logout`);
  }
  render() {
    return <div className="menu-drawer">
    <NavLink to="/" activeClassName><button>Home</button></NavLink>
    <NavLink to="/main"><button>FretBoard</button></NavLink>
    <NavLink to="/login"><button>Signup/Login</button></NavLink>

    </div>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateUser, updateTuningName }
)(UserDrawer);
