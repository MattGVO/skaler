import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

const apiUrl = '/api/'

class ScaleNotes extends Component {
  constructor(props){
    super(props);

    this.state={
      scaleName: this.props.scaleName,
      scaleNotes: ["C", "D", "E", "F","G",null,null],
    }
  }



  async componentDidMount(){
    var scaleNameArr = this.state.scaleName.split(' ')
    let res = await axios.get(`${apiUrl}getScale`, {
     rootNote: scaleNameArr[0],
    scaleName: scaleNameArr[1],
    });
  }

  

  render() {
    return (
      <div className="ScaleNotes">
      <h2>
        {this.props.scaleName}
      </h2>
        {this.state.scaleNotes.map( (val,i) => {
          if (val)
          return(
          <h3 key={i} className="Interval">{val}</h3>
          )
          })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(ScaleNotes);