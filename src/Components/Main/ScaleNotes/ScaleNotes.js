import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { updateScaleNotes } from '../../../ducks/scaleReducer'
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
    scaleName: scaleNameArr[2]? `${scaleNameArr[1]} ${scaleNameArr[2]}`: scaleNameArr[1],
  })
  let { rootnote,second,third,fourth,fifth,sixth,seventh } = result.data[0]
  var scaleNoteArray = [rootnote,second,third,fourth,fifth,sixth,seventh]
  updateScaleNotes(scaleNoteArray)
  this.setState({
    scaleNotes:[...scaleNoteArray]
  })
}

async componentDidUpdate(prevProps) {
  if (this.props.scaleName !== prevProps.scaleName) {
     var scaleNameArr = this.props.scaleName.split(' ')
  let result = await axios.post(`${apiUrl}getscale`, {
  rootNote: scaleNameArr[0],
  scaleName: scaleNameArr[2]? `${scaleNameArr[1]} ${scaleNameArr[2]}`: scaleNameArr[1],
})
let { rootnote,second,third,fourth,fifth,sixth,seventh } = result.data[0]
var scaleNoteArray = [rootnote,second,third,fourth,fifth,sixth,seventh]
this.props.updateScaleNotes(scaleNoteArray)
this.setState({
  scaleNotes:[...scaleNoteArray]
})

  }
}

  

  render() {
    return (
      <div className="ScaleNotes">
      <h4>
        {this.props.scaleName}
      </h4>
        {this.state.scaleNotes.map( (val,i) => {
          if (val){
            return<h4 key={i} className="Interval">{val}</h4>
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

export default connect(mapStateToProps, {updateScaleNotes})(ScaleNotes);