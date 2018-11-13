import React, { Component } from "react";
import String from './String'

class Fretboard extends Component {
  constructor(){
    super();

    this.state={
      numOfStrings: 2,
      stringArray: [],
    }
  }
  render() {
    for (let i=0; i < this.state.numOfStrings; i++){
      this.state.stringArray.push(<String/>)
    }
    
    return (
      <div className="Fretboard">
        <div className="StringContainer">
        {this.state.stringArray.map( (val,i) => {
          return val;
        })}
        
        </div>
      </div>
    );
  }
}

export default Fretboard;