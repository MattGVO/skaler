import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
import UserDrawer from './UserDrawer/UserDrawer';
import { connect } from "react-redux";
import { updateUser } from '../../ducks/reducer'
import "./Main.css";
import Home from "../Home/Home";
import axios from "axios";

const authUrl = "/auth/";
const apiUrl = '/api/'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
      tuningName: '',
    };
  }

  async componentDidMount() {
    let res = await axios.get(`${authUrl}user-data`);
    if (res.data.useremail) {
      this.setState({
        user: true
      });
      this.props.updateUser(res.data.useremail)
    }
  }

  async componentDidUpdate(prevState){
    if (this.state.tuningName !== prevState.tuningName){
      let res1 = await axios.get(`${authUrl}user-data`);
      let res = await axios.post(`${apiUrl}get-tuning`, {
        user: res1.data.useremail,
        tuningName: this.state.tuningName
      })
      console.log(res.data)
    }
  }

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  render() {
    return (
      <div >
        {!this.state.user ? 
          <Home/>
           : 
            <div className="preset-layer">
            <UserDrawer handleChange={this.handleChange} className="preset-layer"/>
            <div className="main-container">
            <div className="main-container-background">
              <ScaleSelector />
              <FretBoard />
              <ScaleNotes />
            </div>

            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(null, {updateUser} )(Main);
