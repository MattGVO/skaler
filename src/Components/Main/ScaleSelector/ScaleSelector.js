import React, { Component } from "react";
import ScaleName from './ScaleName';
import NumOfStrings from './NumOfStrings';
import RootNote from './RootNote';
import { connect } from 'react-redux';
import { updateScale } from '../../../ducks/scaleReducer'


class ScaleSelector extends Component {
  constructor(props){
    super(props);

    this.state={
      rootNote: "A",
      scaleName: "Major/Ionian",
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.updateScale(this.state)
  }
  
  render() {
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
      </div>
    );
  }
}



export default connect(null, {updateScale})(ScaleSelector);