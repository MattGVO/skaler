import React, { Component } from "react";
import ScaleSelector from "./ScaleSelector/ScaleSelector";
import FretBoard from "./Fretboard/Fretboard";
import ScaleNotes from "./ScaleNotes/ScaleNotes";
import UserDrawer from './UserDrawer/UserDrawer';
import { connect } from "react-redux";
import { updateUser } from '../../ducks/reducer';
import { updateDuxTuning } from '../../ducks/reducer';
import "./Main.css";
import Home from "../Home/Home";
import axios from "axios";

const authUrl = "/auth/";
const apiUrl = '/api/'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      tuningName: '',
    };
    this.logOut = this.logOut.bind(this)
  }

  async componentDidMount(){
    let res = await axios.get(`${authUrl}user-data`);
    if (res.data.useremail) {
      this.setState({
        user: res.data.useremail
      });
      this.props.updateUser(res.data.useremail)
    }
  }

  async componentDidUpdate(prevProps,prevState){
    if (this.state.tuningName !== prevState.tuningName){

      let res = await axios.post(`${apiUrl}get-tuning`, {
        user: this.state.user,
        tuningName: this.state.tuningName
      })
      this.props.updateDuxTuning(res.data)
    }
  }

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}


  async logOut() {
    this.props.updateUser(null)
    let res = await axios.get(`${authUrl}logout`);
    console.log(res.data)
    this.setState({
      user: null
    })
    this.props.history.push('/')
   }

  render() {
    return (
      <div >
        {!this.state.user ? 
          <Home/>
           : 
            <div className="preset-layer">
            <UserDrawer logOut={this.logOut} tuningName ={this.state.tuningName} handleChange={this.handleChange} className="preset-layer"/>
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

export default connect(null, {updateUser, updateDuxTuning} )(Main);
