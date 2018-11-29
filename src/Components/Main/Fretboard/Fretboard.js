import React, { Component } from "react";
import String from "./String";
import { connect } from "react-redux";
import { updateDuxTuning } from '../../../ducks/reducer';

class Fretboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfStrings: 2,
      stringArray: [],
      tuning: ["E", "A", "D", "G", "B", "E", "A", "A"]
    };
    this.updateTuning= this.updateTuning.bind(this)
  }
  
  updateTuning(index,note){
    var tuneArr = [...this.state.tuning]
    tuneArr.splice(index,1,note)
    this.setState({
      tuning: [...tuneArr]
    })
  }

  componentDidMount() {
    let difference = this.props.numOfStrings;
    let stringArray = [];

    for (let i = 0; i < difference; i++) {
      stringArray.push(
        <String updateTuning ={this.updateTuning} index={i} string={this.state.tuning[i]} />
      );
    }
    this.setState({
      stringArray: [...stringArray]
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.tuning !== prevProps.tuning){
      var tuneArr = this.props.tuning
      this.setState({
        tuning: [...tuneArr]
      })
    }
    if (this.props.numOfStrings !== prevProps.numOfStrings) {
      
      let difference = this.props.numOfStrings;
      let stringArray = [];

      for (let i = 0; i < difference; i++) {
        stringArray.push(
        <String updateTuning ={this.updateTuning} index={i} string={this.state.tuning[i]} />
        );
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
          <span># of Frets</span>
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

export default connect(mapStateToProps, {updateDuxTuning})(Fretboard);
