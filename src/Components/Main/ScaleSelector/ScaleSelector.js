import React, { Component } from "react";
import ScaleName from './ScaleName';
import NumOfStrings from './NumOfStrings';
import RootNote from './RootNote';

class ScaleSelector extends Component {
  render() {
    return (
      <div className="ScaleSelector">
       <RootNote/>
       <ScaleName/>
       <NumOfStrings/>
      </div>
    );
  }
}

export default ScaleSelector;