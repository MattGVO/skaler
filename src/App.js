import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import logo from "./skaler.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { updateUser } from './ducks/reducer'
// import PresetDrawer from "./Components/Main/PresetDrawer/PresetDrawer";
import axios from "axios";
const authUrl = "/auth/";

class App extends Component {
  constructor(){
    super();

    this.state={
      user: false,
    }
  }

  async componentDidMount(){
    if (this.props.user){
      this.setState({
        user: true,
      })
    }
  }

  async logOut() {
    let res = await axios.get(`${authUrl}logout`);
    console.log(res.data.session)
  }

  render() {
    console.log('app user',this.state.user)
    return (
      <div className="App">
        <header>
          <button
            className="logo-button"
            onClick={() => this.props.history.push("/")}
          >
            <h3 className="header-items">SKALER</h3>
          </button>
          <img className="logo header-items" src={logo} alt="logo" />
          {this.props.location.pathname === "/" ? (
            <Link className="header-items" to="/login">
              <button className="login">login</button>
            </Link>
          ) : null}
          {this.props.location.pathname === "/main" && this.state.user? (
            <div className="header-items">
              <button className="logo-button">presets</button>
              {/* <PresetDrawer /> */}
              <Link className="header-items" to="/">
                <button className="login" onClick={this.logOut}>
                  logout
                </button>
              </Link>
            </div>
          ) : <Link className="header-items" to="/login">
          <button className="login">login</button>
        </Link>}
        </header>

        {Routes}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps, {updateUser})(App));
