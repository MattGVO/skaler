import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-container-background">
          <ScaleSelector />
          <FretBoard />
          <ScaleNotes />
        </div>
      </div>
    );
  }
}

export default Main;
