import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
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
    }
  }

  render() {
    console.log("user:", this.state.user);
    return (
      <div>
        {!this.state.user ? (
          <Home user={this.state.user}/>
        ) : (
          <div className="main-container">
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

export default Main;
