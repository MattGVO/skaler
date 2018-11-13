import React, { Component } from "react";

class NumOfStrings extends Component {
  render() {
    return (
      <div>
        <input 
        type="number" 
        name="numOfStrings" 
        min="1" 
        max="8"
        />
      </div>
    );
  }
}

export default NumOfStrings;