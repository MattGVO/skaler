import React, { Component } from "react";
import Fret from './Frets'

class String extends Component {
  render() {
    return (
      <div className="StringAndFret">
        <select name="String">
          <option value="A">A</option>
          <option value="A#">A#</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="D">D</option>
          <option value="D#">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="G">G</option>
          <option value="G#">G#</option>
        </select>
        <Fret/>
      </div>
    );
  }
}

export default String;