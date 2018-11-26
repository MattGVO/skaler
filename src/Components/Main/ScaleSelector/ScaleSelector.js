import React, { Component } from "react";
import ScaleName from './ScaleName';
import NumOfStrings from './NumOfStrings';
import RootNote from './RootNote';
// import SavePreset from './SavePreset';
import { connect } from 'react-redux';
import { updateScale } from '../../../ducks/reducer'


class ScaleSelector extends Component {
  constructor(props){
    super(props);

    this.state={
      rootNote: "A",
      scaleName: "Major/Aeolian",
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.state !== prevProps) {
      this.props.updateScale(`${this.state.rootNote} ${this.state.scaleName}`)
    }
  }
  
  
  render() {
    // this.props.updateScale(`${this.state.rootNote} ${this.state.scaleName}`)
    
    return (
      <div className="ScaleSelector">
       <RootNote
       handleChange= {this.handleChange}
       rootNote={this.state.rootNote}
       />
       <ScaleName
       handleChange= {this.handleChange}
       scaleName = {this.state.scaleName}
       />
       <NumOfStrings/>
       {/* <SavePreset/> */}
      </div>
    );
  }
}



export default connect(null, {updateScale})(ScaleSelector);