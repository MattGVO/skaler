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
        <input 
        onChange={this.handleChange}
        type="number" 
        name="numOfStrings" 
        min="1" 
        max="8"
        value= {this.state.numOfStrings}
        />
      </div>
    );
  }
}



export default connect(null, {updateString})(NumOfStrings);