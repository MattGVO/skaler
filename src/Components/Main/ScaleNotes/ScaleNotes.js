import React, { Component } from "react";
import { connect } from 'react-redux';

class ScaleNotes extends Component {
  constructor(props){
    super(props);

    this.state={
      scaleName: null,
      scaleNotes: ["C", "D", "E", "F","G",null,null,],
    }
  }

  async componentDidMount(){
   let result = await this.props.scaleName.rootNote
    console.log(result);
    
  }
  render() {
    
    return (
      <div className="ScaleNotes">
      <h2>
        {/* {this.state.scaleName} */}
      </h2>
        {this.state.scaleNotes.map( (val,i) => {
          return(
          <h2 key={i} className="Interval">{val}</h2>
          )
          })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(ScaleNotes);