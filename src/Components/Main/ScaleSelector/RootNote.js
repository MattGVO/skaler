import React, { Component } from "react";

class RootNote extends Component {
  constructor(props){
    super(props);

    this.state={
      rootNote: "A"
    }
  }

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}
  

  render() {
    return (
      <div>
        <select name="rootNote" onChange={this.props.handleChange} value={this.props.rootNote}>
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
      </div>
    );
  }
}

export default RootNote;