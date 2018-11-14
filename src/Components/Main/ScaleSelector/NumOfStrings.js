import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateString } from '../../../ducks/scaleReducer'

class NumOfStrings extends Component {
  constructor(props){
    super(props);

    this.state ={
      numOfStrings: "1",
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }); 
    this.props.updateString(e.target.value) 
    }

  render() {
    return (
      <div>
        # of Strings:
        <select 
        name="numOfStrings" 
        onChange={this.handleChange} 
        value={this.state.numOfStrings}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">6</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          </select>
      </div>
    );
  }
}



export default connect(null, {updateString})(NumOfStrings);