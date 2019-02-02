import React, { Component } from "react";
import "./App.scss";
import Routes from "./Routes";
import logo from "./skaler.svg";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "./ducks/reducer";
import axios from "axios";

const authUrl = "/auth/";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
    this.logOut = this.logOut.bind(this)
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

  async logOut() {
    this.props.updateUser(null);
    await axios.get(`${authUrl}logout`);
    this.setState({
      user: null
    });
  }


  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" className="logo-button">
            <div className="logo-container">
              <h3 className="title">SKALER</h3>
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Link>
          <div id="nav-bar">
            <NavLink className="nav-links" activeClassName="active-route" exact to="/">Home</NavLink>
            <NavLink className="nav-links" activeClassName="active-route" to="/main">Fretboard</NavLink>
            {!this.props.user? <NavLink className="nav-links" to="/login"><button>Signup/Login</button></NavLink>:<button onClick={this.logOut}>Logout</button>}
          </div>
        </header>
        <main>{Routes}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default 
withRouter(connect(
    mapStateToProps,
    { updateUser }
  )(App));
