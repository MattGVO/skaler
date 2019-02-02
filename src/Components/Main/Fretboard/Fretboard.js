import React, { Component } from "react";
import String from "./String";
import Presets from "../Presets/Presets";
import { connect } from "react-redux";
import { updateDuxTuning, updateUserTunings } from "../../../ducks/reducer";
import NumOfFrets from "./NumOfFrets";
import axios from "axios";
const apiUrl = "/api/";

class Fretboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfFrets: 23,
      numOfStrings: 2,
      stringArray: [],
      tuningName: "",
      updateName: "",
      tuning: ["E", "A", "D", "G", "B", "E", "A", "A"],
      userTunings: [],
      edit: false,
      save: false,
      delete: false
    };
    this.updateDBTuning = this.updateDBTuning.bind(this)
    this.spliceTuning = this.spliceTuning.bind(this)
    this.saveTuning = this.saveTuning.bind(this)
    this.deleteTuning = this.deleteTuning.bind(this)
  }

  componentDidMount() {
    let difference = this.props.numOfStrings;
    let stringArray = [];

    for (let i = 0; i < difference; i++) {
      stringArray.push(
        <String
          spliceTuning={this.spliceTuning}
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
            spliceTuning={this.spliceTuning}
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
            spliceTuning={this.spliceTuning}
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
    if (this.state.tuningName !== prevState.tuningName) {
      let res = await axios.post(`${apiUrl}get-tuning`, {
        user: this.props.user,
        tuningName: this.state.tuningName
      });
      this.props.updateDuxTuning(res.data);
    }
  }

  spliceTuning(index, e){
    let newTuning = this.state.tuning
    newTuning.splice(index, 1, e.target.value)
    this.setState({
      tuning: [...newTuning]
    })
  }

  async updateDBTuning(){
    var updateName = ''
    if(this.state.updateName){
      updateName = this.state.updateName
    }else{
      updateName = this.state.tuningName
    }
    let res = await axios.put(`${apiUrl}update-db-tuning/${this.props.user}`, {updateName, tuningName:this.state.tuningName, tuning: this.state.tuning})
    console.log(res.data)
    let userTunings = res.data.map((val, i) => val.tuningname)
    this.props.updateUserTunings(userTunings)
    this.setState({
      updateName: '',
    })
  }

  async deleteTuning(){
    let res = await axios.delete(`${apiUrl}delete-tuning/${this.state.tuningName}`)
    let userTunings = res.data.map((val, i) => val.tuningname)
    this.props.updateUserTunings(userTunings)
  }

 async saveTuning(){
  let res = await axios.post(`${apiUrl}save-tuning`,{
    user: this.props.user,
    tuningName: this.state.updateName,
    tuning: this.state.tuning
  })
  console.log('res.data',res.data)
  let userTunings = res.data.map((val, i) => val.tuningname)
    this.props.updateUserTunings(userTunings)
 }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  };

  render() {
    console.log('this.state.tuning',this.state.tuning)
    console.log("this.state.userTunings:", this.state.userTunings);
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
            toggle={this.toggle}
            edit={this.state.edit}
            save={this.state.save}
            delete={this.state.delete}
            update={this.state.update}
          />
        </div>
        
        {!this.state.edit && !this.state.delete && !this.state.save? (
          <div id="user-message">
            
          </div>
        ) : (
          null
        )}
        
        {this.state.edit ? (
          <div id="user-message">
            <h2>Update {this.state.tuningName} With Current Name & Tuning ?</h2>
            <div>
              <button name="edit" onClick={(e) => {this.updateDBTuning(); this.toggle(e)}} className="Preset-buttons">
                Confirm
              </button>
              <button
                name="edit"
                onClick={this.toggle}
                className="Preset-buttons"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          null
        )}
        {this.state.delete ? (
          <div id="user-message">
            <h2>Are You Sure You Want To Delete {this.state.tuningName}?</h2>
            <div>
              <button name="delete" onClick={(e) =>{ this.deleteTuning(); this.toggle(e)}} className="Preset-buttons">
                Confirm
              </button>
              <button
                name="delete"
                onClick={this.toggle}
                className="Preset-buttons"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          null
        )}
        {this.state.save? (
          <div id="user-message">
          <h2>Save Current Tuning?</h2>
            <div>
              <button name="save" onClick={(e) =>{this.saveTuning(); this.toggle(e)}} className="Preset-buttons">
                Confirm
              </button>
              <button
                name="save"
                onClick={this.toggle}
                className="Preset-buttons"
              >
                Cancel
              </button>
            </div>
          </div>
        ):null}
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

export default connect(
  mapStateToProps,
  { updateDuxTuning, updateUserTunings }
)(Fretboard);
