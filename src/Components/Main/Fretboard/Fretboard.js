import React, { Component } from "react";
import String from './String'

class Fretboard extends Component {
  render() {
    return (
      <div className="Fretboard">
        <String />
        <String />
        <String />
        <String />
      </div>
    );
  }
}

export default Fretboard;