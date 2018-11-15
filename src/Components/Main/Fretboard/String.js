import React, { Component } from "react";

class String extends Component {
  constructor(){
    super();
    

    this.state={
      fretArray: [],
      scaleNotes: []
    }
    for (let i =0; i < 25; i++){
      this.state.fretArray.push([i])
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
          return <div className="Fret" key={i}>{val%2 ===0? val:null}</div>
        })}
      </div>
    );
  }
}

export default String;