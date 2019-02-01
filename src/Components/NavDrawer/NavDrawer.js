import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./NavDrawer.scss";
import { updateUser, updateTuningName } from "../../ducks/reducer";
const authUrl = "/auth/";

class UserDrawer extends Component {
  async logout() {
    await axios.get(`${authUrl}logout`);
  }
  render() {
    return <div/>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateUser, updateTuningName }
)(UserDrawer);
