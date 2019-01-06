import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import logo from "./skaler.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, drawerDisplay } from "./ducks/reducer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerDisplay: false
    };
    this.openCloseDrawer = this.openCloseDrawer.bind(this);
  }

  openCloseDrawer() {
    if (this.state.drawerDisplay) {
      this.props.drawerDisplay(false);
      this.setState({
        drawerDisplay: false
      });
    } else {
      this.props.drawerDisplay(true);
      this.setState({
        drawerDisplay: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" className="logo-button">
            <div className="header-items logo-container">
              <h3 className="header-items title">SKALER</h3>
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Link>
          {this.props.location.pathname === "/main" ? (
            <div className="header-items">
              <h1 onClick={this.openCloseDrawer} className="logo-button">
                menu
              </h1>
            </div>
          ) : null}
        </header>

        {Routes}
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
    { updateUser, drawerDisplay }
  )(App)
);
