import React, { Component } from "react";
import { connect } from 'react-redux';

class UserDrawer extends Component{
  constructor(props){
    super(props);

    this.state={
      hidden: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawerDisplay !== prevProps.drawerDisplay) {
      this.setState({
        hidden: this.props.drawerDisplay
      })
    }
  }

  render(){
    console.log(this.state.hidden)
    return(
      <div style={!this.state.hidden?{display:"none",}:{}}className="preset-drawer">
        <p>user info</p>
        <p>presets</p>
        <p>logout</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserDrawer);