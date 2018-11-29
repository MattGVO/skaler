import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import logo from "./skaler.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { updateUser, drawerDisplay } from './ducks/reducer'



class App extends Component {
  constructor(props){
    super(props);

    this.state={
      drawerDisplay: false,
    }
    this.openCloseDrawer = this.openCloseDrawer.bind(this)
  }

  openCloseDrawer(){
    if(this.state.drawerDisplay){
      this.props.drawerDisplay(false)
      this.setState({
        drawerDisplay: false
      })
    }else{
      this.props.drawerDisplay(true)
      this.setState({
        drawerDisplay: true
      })
    }
  }

  render() {
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
          {this.props.location.pathname === "/main" && this.props.user ? (
            <div className="header-items">
              <button onClick={this.openCloseDrawer} className="logo-button">menu</button>
            </div>
          ) : <Link className="header-items" to="/login">
          <button  className="login">login</button>
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

export default withRouter(connect(mapStateToProps, {updateUser, drawerDisplay})(App));
