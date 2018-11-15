import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
const apiUrl = '/api/'

class ScaleNotes extends Component {
  constructor(props){
    super(props);

    this.state={
      scaleName: this.props.scaleName,
      scaleNotes: [],
    }
  }

  async componentDidMount(){
    var scaleNameArr = this.props.scaleName.split(' ')
    let result = await axios.post(`${apiUrl}getscale`, {
    rootNote: scaleNameArr[0],
    scaleName: `${scaleNameArr[1]}`,
  })
  let { rootnote,second,third,fourth,fifth,sixth,seventh } = result.data[0]
  var scaleNoteArray = [rootnote,second,third,fourth,fifth,sixth,seventh]
  this.setState({
    scaleNotes:[...scaleNoteArray]
  })
}

async componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  console.log(this.state.scaleName)
  if (this.props.scaleName !== prevProps.scaleName) {
     var scaleNameArr = this.props.scaleName.split(' ')
  let result = await axios.post(`${apiUrl}getscale`, {
  rootNote: scaleNameArr[0],
  scaleName: scaleNameArr[1],
})
console.log(result.data[0])
let { rootnote,second,third,fourth,fifth,sixth,seventh } = result.data[0]
console.log(rootnote)
var scaleNoteArray = [rootnote,second,third,fourth,fifth,sixth,seventh]
this.setState({
  scaleNotes:[...scaleNoteArray]
})
  }
}

  

  render() {
    console.log(this.props.scaleName)
    return (
      <div className="ScaleNotes">
      <h3>
        {this.props.scaleName}
      </h3>
        {this.state.scaleNotes.map( (val,i) => {
          if (val){
            return<h3 key={i} className="Interval">{val}</h3>
          }
          return null;
          })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(ScaleNotes);