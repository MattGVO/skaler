import React, { Component } from "react";
import Frets from './Frets'

class String extends Component {
  constructor(){
    super();
    

    this.state={
      fretArray: [],
    }
    for (let i =0; i < 25; i++){
      this.state.fretArray.push(<Frets />)
   }
    
  }
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
        {this.state.fretArray.map((val,i) => {
          return <div>{val}</div>
        })}
      </div>
    );
  }
}

export default String;