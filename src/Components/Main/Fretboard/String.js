import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
const apiUrl = '/api/'

class String extends Component {
  constructor(){
    super();
    

    this.state={
      string: 'A',
      fretArray: [],
      scaleNotes: [],
      fretCoordinates: [],
    }
    for (let i =0; i < 25; i++){
      this.state.fretArray.push([i])
   }
    
  }
  

  async componentDidMount(){
    var stringAndNotesArr = [this.state.string,...this.props.scaleNotes]
    console.log('StringandNotes',stringAndNotesArr)
    let result = await axios.post(`${apiUrl}getfret`, {
      stringAndNotesArr
    })
    // this.setState({
    //   fretCoordinates: result.data
    // })
    console.log('result', result.data)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.scaleNotes !== prevProps.scaleNotes || this.state.string !== prevState.string) {
      var stringAndNotesArr = [this.state.string,...this.props.scaleNotes]
      console.log('StringandNotes',stringAndNotesArr)
      let result = await axios.post(`${apiUrl}getfret`, {
        stringAndNotesArr
      })
      // this.setState({
      //   fretCoordinates: result.data
      // })
      console.log('result', result.data)
    }
  }

  

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  render() {
    console.log(this.props.scaleNotes)
    return (
      <div className="StringAndFret">
        <select name="string" onChange={this.handleChange}>
          <option value="A">A</option>
          <option value="A#">A#</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="D">D</option>
          <option value="D#">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="G">G</option>
          <option value="G#">G#</option>
        </select>
        {this.state.fretArray.map((val,i) => {
          return <div className="Fret" key={i}>{val%2 ===0? <span className="dot"></span>:null}</div>
        })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(String);