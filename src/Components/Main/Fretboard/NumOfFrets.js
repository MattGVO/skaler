import React, { Component } from "react";
import { connect } from 'react-redux';

class NumOfFrets extends Component {

  render() {
    return (
      <div className="fret-selector">
        <select 
        name="numOfFrets" 
        onChange={this.props.handleChange} 
        value={this.props.numOfFrets}>
          <option value="13">12</option>
          <option value="14">13</option>
          <option value="15">14</option>
          <option value="16">15</option>
          <option value="17">16</option>
          <option value="18">17</option>
          <option value="20">19</option>
          <option value="21">20</option>
          <option value="22">21</option>
          <option value="23">22</option>
          <option value="24">23</option>
          <option value="25">24</option>
          </select>
      </div>
    );
  }
}



export default connect(null)(NumOfFrets);