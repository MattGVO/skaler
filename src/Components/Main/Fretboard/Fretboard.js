import React, { Component } from "react";
import String from "./String";
import { connect } from "react-redux";
import { updateDuxTuning } from "../../../ducks/reducer";
import NumOfFrets from "./NumOfFrets";

class Fretboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfFrets: 23,
      numOfStrings: 2,
      stringArray: [],
      tuning: ["E", "A", "D", "G", "B", "E", "A", "A"]
    };
  }


  componentDidMount() {
    let difference = this.props.numOfStrings;
    let stringArray = [];

    for (let i = 0; i < difference; i++) {
      stringArray.push(
        <String
          numOfFrets={this.state.numOfFrets}
          updateTuning={this.props.updateTuning}
          index={i}
          string={this.state.tuning[i]}
        />
      );
    }
    this.setState({
      stringArray: [...stringArray]
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tuning !== prevProps.tuning) {
      var tuneArr = this.props.tuning;
      this.setState({
        tuning: [...tuneArr]
      });
    }
    if (this.state.numOfFrets !== prevState.numOfFrets) {
      let difference = this.props.numOfStrings;
      let stringArray = [];

      for (let i = 0; i < difference; i++) {
        stringArray.push(
          <String
            numOfFrets={this.state.numOfFrets}
            updateTuning={this.props.updateTuning}
            index={i}
            string={this.state.tuning[i]}
          />
        );
      }
      this.setState({
        stringArray: [...stringArray]
      });
    }
    if (this.props.numOfStrings !== prevProps.numOfStrings) {
      let difference = this.props.numOfStrings;
      let stringArray = [];

      for (let i = 0; i < difference; i++) {
        stringArray.push(
          <String
            numOfFrets={this.state.numOfFrets}
            updateTuning={this.props.updateTuning}
            index={i}
            string={this.state.tuning[i]}
          />
        );
      }
      this.setState({
        stringArray: [...stringArray]
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Fretboard">
        <div className="fretboard-key">
          <span> Root Note: </span>
          <span className="key-dot" />
          <span className="fret-selector"># of Frets</span>
          <NumOfFrets
            
            numOfFrets={this.state.numOfFrets}
            handleChange={this.handleChange}
          />
        </div>
        <div className="StringContainer">
          {this.state.stringArray.map((val, i) => {
            return <div  key={i}>{val}</div>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateDuxTuning }
)(Fretboard);
