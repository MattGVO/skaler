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
      update: false,
      delete: false,
      save: false,
      updateName: this.props.tuningName,
      tunings: [],
    };
    this.updatePreset = this.updatePreset.bind(this);
    this.deletePreset = this.deletePreset.bind(this);
    this.savePreset = this.savePreset.bind(this);
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

  updatePreset() {
    if (!this.state.update) {
      this.setState({
        update: true
      });
    } else {
      this.setState({
        update: false
      });
    }
  }

  deletePreset() {
    if (!this.state.delete) {
      this.setState({
        delete: true
      });
    } else {
      this.setState({
        delete: false
      });
    }
  }

  savePreset() {
    if (!this.state.save) {
      this.setState({
        save: true
      });
    } else {
      this.setState({
        save: false
      });
    }
  }

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  render() {
    console.log(this.state.updateName);
    return (
      <div
        style={!this.state.hidden ? { width: "0vw" } : {}}
        className="preset-drawer"
      >
        {/* <div>
          <p>user info</p>
        </div> */}
        <div className="drawer-items">

          <h1 className="drawer-items">presets</h1>
          {!this.state.update? <select name="tuningName" onChange={this.props.handleChange}>
            <option value="" hidden>
              Choose Tuning
            </option>
            {this.state.tunings.map((val, i) => {
              return (
                <option value={val.tuningname} key={i}>
                  {val.tuningname}
                </option>
              );
            })}
          </select>:null}
          

          {this.props.tuningName && !this.state.update && !this.state.delete ? (
            <div className="drawer-items">
              <button onClick={this.updatePreset}>Update</button>
              <button onClick={this.deletePreset}>Delete</button>
            </div>
          ) : null}

          {this.props.tuningName && this.state.update ? (
            <div className="drawer-items">
              <input name="updateName" defaultValue={this.props.tuningName} onChange={this.handleChange} />
              <button type="button" >Submit</button>
              <button type="button" onClick={this.updatePreset}>Cancel</button>
            </div>
          ) : null}

          {this.props.tuningName && !this.state.update && this.state.delete ? (
            <div className="drawer-items">
              <p>
                Are You Sure?<button>Yes</button>
                <button onClick={this.deletePreset}>No</button>
              </p>
            </div>
          ) : null}

          <button onClick={this.savePreset}>Save Tuning</button>
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
