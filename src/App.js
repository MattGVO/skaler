import React, { Component } from "react";
import "./App.scss";
import Routes from "./Routes";
import logo from "./skaler.svg";
import UserDrawer from "./Components/UserDrawer/RouteDrawer";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "./ducks/reducer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      drawerDisplay: false
    };
    this.openCloseDrawer = this.openCloseDrawer.bind(this);
  }

  openCloseDrawer() {
    this.setState({
      drawerDisplay: !this.state.drawerDisplay
    });
  }

  render() {
    console.log("state user", this.state.user);
    return (
      <div className="App">
        <header>
          <Link to="/" className="logo-button">
            <div className="logo-container">
              <h3 className="title">SKALER</h3>
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Link>
          <i
            onClick={this.openCloseDrawer}
            className="logo-button fas fa-bars"
          />
        </header>
        <main>
          <UserDrawer
            drawerDisplay={this.state.drawerDisplay}
            history={this.props.history}
          />
          {Routes}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(
  connect(
    mapStateToProps,
    { updateUser }
  )(App)
);
