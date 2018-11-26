import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
import UserDrawer from './UserDrawer/UserDrawer';
import { connect } from "react-redux";
import { updateUser } from '../../ducks/reducer'
import "./Main.css";
import Home from "../Home/Home";
import axios from "axios";
const authUrl = "/auth/";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false
    };
  }

  async componentDidMount() {
    let res = await axios.get(`${authUrl}user-data`);
    if (res.data.useremail) {
      this.setState({
        user: true
      });
      this.props.updateUser(res.data.useremail)
    }
  }

  render() {
    return (
      <div className ="main-container">
        {!this.state.user ? (
          <Home user={this.state.user}/>
          ) : (
            <div className="preset-layer">
            <UserDrawer className="preset-layer"/>
            <div className="main-container-background">
              <ScaleSelector />
              <FretBoard />
              <ScaleNotes />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, {updateUser} )(Main);
