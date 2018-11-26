import React, { Component } from "react";
import String from "./String";
import { connect } from "react-redux";

class Fretboard extends Component {
  constructor() {
    super();

    this.state = {
      numOfStrings: 1,
      stringArray: [],
      defaultTuning: ["E", "A", "D", "G", "B", "E","A","D",]
    };
  }
  
  componentDidMount() {
    let difference = this.props.numOfStrings;
    let stringArray = [];
    
    for (let i = 0; i < difference; i++) {
      stringArray.push(<String string={this.state.defaultTuning[i]}/>);
    }
    this.setState({
      stringArray: [...stringArray]
    });
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.numOfStrings !== prevProps.numOfStrings) {
      let difference = this.props.numOfStrings;
      let stringArray = [];
      
      for (let i = 0; i < difference; i++) {
        stringArray.push(<String string={this.state.defaultTuning[i]}/>);
      }
      this.setState({
        stringArray: [...stringArray]
      });
    }
    }

  render() {
    return (
      <div className="Fretboard">
        <div className="fretboard-key">
          <span> Root Note: </span>
          <span className="key-dot" />
        </div>
        <div className="StringContainer">
          {this.state.stringArray.map((val, i) => {
            return <div key={i}>{val}</div>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Fretboard);
