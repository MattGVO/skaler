import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import { updateDuxTuning } from "../../ducks/reducer";
import "./Maincss";
import axios from "axios";

const authUrl = "/auth/";
const apiUrl = "/api/";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  async componentDidUpdate(prevProps) {
    if (this.props.tuningName !== prevProps.tuningName) {
      let res = await axios.post(`${apiUrl}get-tuning`, {
        user: this.state.user,
        tuningName: this.props.tuningName
      });
      this.props.updateDuxTuning(res.data);
    }
  }

  async submitTuning(callback) {
    await axios.post(`${apiUrl}save-tuning`,{
      user: this.state.user,
      tuningName: this.state.updateName,
      tuning: this.state.tuning,
    })
  }

  async deleteTuning(){
    // var user = this.state.user
    var tuningName = this.state.tuningName
    await  axios.delete(`${apiUrl}delete-tuning/${tuningName}`,{
      data: tuningName,
    })
  }

  async updateDbTuning(){
    let updateName = ''
    var user = this.state.user
    if(this.state.updateName ===''){
      updateName = this.state.tuningName
    }else{
      updateName = this.state.updateName
    }
    await axios.put(`${apiUrl}update-db-tuning/${user}`,{
      updateName: updateName,
      tuningName: this.state.tuningName,
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async logOut() {
    this.props.updateUser(null);
    await axios.get(`${authUrl}logout`);
    this.setState({
      user: null
    });
  }

  render() {
    return (
      <div className="main-container">
              <div className="main-container-background">
                <ScaleSelector />
                <FretBoard updateTuning={this.updateTuning} />
                <ScaleNotes />
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
  { updateUser, updateDuxTuning }
)(Main);
