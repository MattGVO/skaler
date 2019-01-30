import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import './UserDrawer.scss';
import { updateUser, updateDuxTuning } from "../../ducks/reducer";
const authUrl = "/auth/";
const apiUrl = "/api/";

class UserDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerDisplay: this.props.drawerDisplay,
      user: this.props.user,
      update: false,
      delete: false,
      save: false,
      updateName: this.props.tuningName,
      tunings: [],
    };
    this.updatePreset = this.updatePreset.bind(this);
    this.deletePreset = this.deletePreset.bind(this);
    this.savePreset = this.savePreset.bind(this);
    this.getAllTunings = this.getAllTunings.bind(this);
    this.logout = this.logout.bind(this)
  }

  async componentDidMount() {
    this.getAllTunings()
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawerDisplay !== prevProps.drawerDisplay) {
      this.setState({
      drawerDisplay: this.props.drawerDisplay
      });
    }
    if(this.props.user !== prevProps.user){
      this.getAllTunings()
    }
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

  toggle = (e) =>{
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    })
  }

  async getAllTunings() {
    let res = await axios.post(`${apiUrl}get-all-tunings`, {
      user: this.props.user
    });
    this.setState({
      tunings: res.data
    });
  }

  async logout(){
    await axios.get(`${authUrl}logout`)
    this.props.history.push("/")
  }

  render() {
    console.log(this.props.user)
    return (
      <div
        className={this.state.drawerDisplay? "menu-drawer" : "menu-drawer closed-drawer" }
      >
      {this.props.user? 
         <div className="preset-menu">
          <h1 className="drawer-items">presets</h1>
          {!this.state.update && !this.state.save ? (
            <select
              style={{width: "100%"}}
              value={this.props.tuningName}
              name="tuningName"
              onChange={(e) => {this.props.updateDuxTuning(e.target.value)}}
            >
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
            </select>
          ) : null}

          {this.props.tuningName &&
          !this.state.update &&
          !this.state.delete &&
          !this.state.save ? (
            <div className="drawer-items update-buttons">
              <button onClick={this.updatePreset}>Update</button>
              <button onClick={this.deletePreset}>Delete</button>
            </div>
          ) : null}

          {this.props.tuningName && this.state.update ? (
            <div className="drawer-contents">
              <input
                className="preset-input"
                name="updateName"
                defaultValue={this.props.tuningName}
                onChange={this.props.handleChange}
              />
              <div className="drawer-items update-buttons">
                <button
                  type="button"
                  onClick={() => {
                    this.props.updateDbTuning();
                    this.updatePreset();
                    this.getAllTunings();
                  }}
                >
                  Submit
                </button>
                <button type="button" onClick={this.updatePreset}>
                  Cancel
                </button>
              </div>
            </div>
          ) : null}

          {this.props.tuningName && !this.state.update && this.state.delete ? (
            <div className="drawer-items update-buttons">
              <p>
                Are You Sure?
                <button
                  onClick={() => {
                    this.props.deleteTuning();
                    this.deletePreset();
                    this.getAllTunings();
                  }}
                >
                  Yes
                </button>
                <button onClick={this.deletePreset}>No</button>
              </p>
            </div>
          ) : null}

          {this.state.save ? (
            <div className="drawer-items">
              <input
                className="preset-input"
                name="updateName"
                placeholder="Tuning Name"
                onChange={this.props.handleChange}
              />
              <div className="drawer-items update-buttons">
              <button
                type="button"
                onClick={() => {
                  this.props.submitTuning();
                  this.savePreset();
                  this.getAllTunings();
                }}
              >
                Submit
              </button>
              <button type="button" onClick={this.savePreset}>
                Cancel
              </button>
              </div>
            </div>
          ) : (
            <button onClick={this.savePreset}>Save Tuning</button>
          )}
          <button onClick={this.logout} >Logout</button>
        </div>:
        <div className="Drawer-contents">
          <h1>Login to enjoy all of SKALER's features</h1>
          <button onClick={() => this.props.history.push("/login")}>Signup/Login</button>
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateUser,updateDuxTuning }
)(UserDrawer);
