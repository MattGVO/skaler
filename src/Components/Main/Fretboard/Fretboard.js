import React, { Component } from "react";
import String from "./String";
import Presets from "../Presets/Presets";
import { connect } from "react-redux";
import { updateDuxTuning } from "../../../ducks/reducer";
import NumOfFrets from "./NumOfFrets";
import axios from "axios";
const apiUrl = '/api/'


class Fretboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfFrets: 23,
      numOfStrings: 2,
      stringArray: [],
      tuningName: "",
      tuning: ["E", "A", "D", "G", "B", "E", "A", "A"],
      userTunings: [],
      edit: false,
      save: false,
      delete: false,
      update: false,
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


  async componentDidUpdate(prevProps, prevState) {
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
            tuning={this.state.tuning}
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
            tuning={this.state.tuning}
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
    if(this.state.tuningName !== prevState.tuningName){
      let res = await axios.post(`${apiUrl}get-tuning`, {
        user: this.props.user,
        tuningName: this.state.tuningName
      })
      this.props.updateDuxTuning(res.data)
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = e => {
    this.setState({
        [e.target.name]: !this.state[e.target.name]
    })
}

  render() {
    console.log('this.state.tuningname:',this.state.tuningName)
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
          <Presets 
          handleChange={this.handleChange} 
          userTuningName={this.state.tuningName}
          edit={this.state.edit}
          save={this.state.save}
          delete={this.state.delete}
          update={this.state.update}
          />
        </div>
        <div id="user-message">
                    <h2>Are You Sure You Want To Delete {this.state.tuningName}?</h2>
                    <div>
                    <button className="Preset-buttons">Confirm</button>
                    <button className="Preset-buttons">Cancel</button>
                    </div>
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
