import React, { Component } from "react";

class ScaleNotes extends Component {
  constructor(){
    super();

    this.state={
      scaleNotes: ["C", "D", "E", "F","G",null,null,],
    }
  }
  render() {
    return (
      <div className="ScaleNotes">
        {this.state.scaleNotes.map( (val,i) => {
          return(
          <h2 key={i} className="Interval">{val}</h2>
          )
          })}
      </div>
    );
  }
}

export default ScaleNotes;