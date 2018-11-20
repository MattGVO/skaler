import React, { Component } from "react";
import String from './String'
import { connect } from 'react-redux';

class Fretboard extends Component {
  constructor(){
    super();
    

    this.state={
      numOfStrings: 1,
      stringArray: [],
    }
    
    
  }

  render() {
    const difference = this.props.numOfStrings-this.state.stringArray.length
    const negDifference = difference * -1
    

    if (difference >=1){
      for (let i=0; i < difference; i++){
        this.state.stringArray.push(<String/>)
      }
    }else {
      this.state.stringArray.splice(this.state.numOfStrings,negDifference)
    }

    
    
    return (
      <div className="Fretboard">
        <div className="Fretboard">
        {this.state.stringArray.map( (val,i) => {
          return <div key ={i}>{val}</div>
        })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Fretboard);