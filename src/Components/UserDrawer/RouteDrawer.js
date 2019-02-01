import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./RouteDrawer.scss";
import { updateUser, updateTuningName } from "../../ducks/reducer";
const authUrl = "/auth/";

class UserDrawer extends Component {
  async logout() {
    let e = {
      target: { name: "drawerDisplay" }
    };
    await axios.get(`${authUrl}logout`);
    this.props.history.push("/");
    this.toggle(e);
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
