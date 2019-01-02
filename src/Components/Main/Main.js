import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
import UserDrawer from "./UserDrawer/UserDrawer";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import { updateDuxTuning } from "../../ducks/reducer";
import "./Main.css";
import Home from "../Home/Home";
import axios from "axios";

const authUrl = "/auth/";
const apiUrl = "/api/";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      tuningName: "",
      updateName: "",
      tuning: ["E", "A", "D", "G", "B", "E", "A", "A"]
    };
    this.logOut = this.logOut.bind(this);
    this.updateTuning = this.updateTuning.bind(this);
    this.submitTuning = this.submitTuning.bind(this);
    this.deleteTuning = this.deleteTuning.bind(this);
    this.updateDbTuning = this.updateDbTuning.bind(this);
  }

  updateTuning(index, note) {
    var tuneArr = [...this.state.tuning];
    tuneArr.splice(index, 1, note);
    this.setState({
      tuning: [...tuneArr]
    });
  }

  async componentDidMount() {
    let res = await axios.get(`${authUrl}user-data`);
    if (res.data.useremail) {
      this.setState({
        user: res.data.useremail
      });
      this.props.updateUser(res.data.useremail);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.tuningName !== prevState.tuningName) {
      let res = await axios.post(`${apiUrl}get-tuning`, {
        user: this.state.user,
        tuningName: this.state.tuningName
      });
      this.props.updateDuxTuning(res.data);
    }
  }

  async submitTuning(callback) {
    let res = await axios.post(`${apiUrl}save-tuning`,{
      user: this.state.user,
      tuningName: this.state.updateName,
      tuning: this.state.tuning,
    })
    console.log(res.data)
  }

  async deleteTuning(){
    // var user = this.state.user
    var tuningName = this.state.tuningName
    let res = await  axios.delete(`${apiUrl}delete-tuning/${tuningName}`,{
      data: tuningName,
    })
    console.log(res.data)
  }

  async updateDbTuning(){
    let updateName = ''
    var user = this.state.user
    if(this.state.updateName ===''){
      updateName = this.state.tuningName
    }else{
      updateName = this.state.updateName
    }
    let res = await axios.put(`${apiUrl}update-db-tuning/${user}`,{
      updateName: updateName,
      tuningName: this.state.tuningName,
    })
    console.log(res.data)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async logOut() {
    this.props.updateUser(null);
    let res = await axios.get(`${authUrl}logout`);
    console.log(res.data);
    this.setState({
      user: null
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        {!this.state.user ? (
          <Home />
        ) : (
          <div className="preset-layer">
            <UserDrawer
              updateDbTuning={this.updateDbTuning}
              deleteTuning={this.deleteTuning}
              submitTuning={this.submitTuning}
              tuning={this.state.tuning}
              logOut={this.logOut}
              tuningName={this.state.tuningName}
              handleChange={this.handleChange}
              className="preset-layer"
            />
            <div className="main-container">
              <div className="main-container-background">
                <ScaleSelector />
                <FretBoard updateTuning={this.updateTuning} />
                <ScaleNotes />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { updateUser, updateDuxTuning }
)(Main);
