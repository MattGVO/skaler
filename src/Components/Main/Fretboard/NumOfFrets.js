import React, { Component } from "react";
import { connect } from 'react-redux';

class NumOfFrets extends Component {
  constructor(props){
    super(props);

    this.state ={
      numOfFrets: "22",
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
        name="numOfFrets" 
        onChange={this.handleChange} 
        value={this.state.numOfFrets}>
          <option value="12">12</option>
          <option value="13">14</option>
          <option value="15">15</option>
          <option value="16">17</option>
          <option value="18">19</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          </select>
      </div>
    );
  }
}



export default connect(null)(NumOfFrets);