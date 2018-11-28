import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
const authUrl = "/auth/";
const apiUrl = "/api/";

class UserDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
      tunings:[],
    };
  }

  async componentDidMount() {
    let user = "";
    if (!this.props.user) {
      let res = await axios.get(`${authUrl}user-data`);
      user = res.data.useremail;
    } else {
      user = await this.props.user;
    }
    let res = await axios.post(`${apiUrl}get-all-tunings`, {
      user
    });
    this.setState({
      tunings: res.data
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawerDisplay !== prevProps.drawerDisplay) {
      this.setState({
        hidden: this.props.drawerDisplay
      });
    }
  }

  async logOut() {
    let res = await axios.get(`${authUrl}logout`);
    console.log(res.data.session);
  }

  render() {
    return (
      <div
        style={!this.state.hidden ? { width: "0vw" } : {}}
        className="preset-drawer"
      >
      <div>
        <p>user info</p>
      </div>
      <div>
        <p>presets</p>
        <select name = "tuningName" onChange={this.props.handleChange}>
        <option value="" hidden>Choose Tuning</option>
        {this.state.tunings.map((val,i) =>{
          return<option value={val.tuningname} key={i}>{val.tuningname}</option>
        })}

        </select>
      </div>
        <Link className="header-items" to="/">
          <button className="login" onClick={this.logOut}>
            logout
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserDrawer);
