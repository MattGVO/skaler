import React, { Component } from "react";
import ScaleSelector from './ScaleSelector/ScaleSelector';
import FretBoard from './Fretboard/Fretboard';
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <ScaleSelector />
        

      </div>
    );
  }
}

export default Main;
