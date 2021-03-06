import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
const apiUrl = '/api/';
var fretCoordinates =[];

class String extends Component {
  constructor(props){
    super(props);
    

    this.state={
      string: this.props.string,
      fretArray: [],
      scaleNotes: [],
      fretCoordinates: [],
      rootNoteCoordinate: [],
    }
    for (let i =0; i < this.props.numOfFrets; i++){
      this.state.fretArray.push([i])
  }
    
  }
  

  async componentDidMount(){
    var stringAndNotesArr = [this.state.string,...this.props.scaleNotes]
    let result = await axios.post(`${apiUrl}getfret`, {
      stringAndNotesArr
    })

    let resultTwo = await axios.post(`${apiUrl}getrootnote`, {
      stringAndNotesArr
    })

    let [rootnote,second,third,fourth,fifth,sixth,seventh] = result.data 


    if (sixth && seventh) {
       fretCoordinates = [rootnote.fret, second.fret, third.fret, fourth.fret, fifth.fret, sixth.fret, seventh.fret, rootnote.fretrpt, second.fretrpt, third.fretrpt, fourth.fretrpt, fifth.fretrpt, sixth.fretrpt, seventh.fretrpt,]
    } else {
       fretCoordinates = [rootnote.fret, second.fret, third.fret, fourth.fret, fifth.fret, rootnote.fretrpt, second.fretrpt, third.fretrpt, fourth.fretrpt, fifth.fretrpt,]
    }
    this.setState({
      fretCoordinates,
      rootNoteCoordinate: resultTwo.data
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.numOfFrets !== prevProps.numOfFrets){
      let numOfFrets =this.props.numOfFrets
      let fretArray = []
      for (let i =0; i < numOfFrets; i++){
        fretArray.push([i])
    }
    this.setState({
      fretArray: [...fretArray]
    })
  }
    if(this.props.tuning !== prevProps.tuning){
      this.setState({
        string: this.props.tuning[this.props.index]
      })
    }
    if (this.props.scaleNotes !== prevProps.scaleNotes || this.state.string !== prevState.string) {
      var stringAndNotesArr = [this.state.string,...this.props.scaleNotes]
     
      let result = await axios.post(`${apiUrl}getfret`, {
        stringAndNotesArr
      })

      let resultTwo = await axios.post(`${apiUrl}getrootnote`, {
        stringAndNotesArr
      })
      
      let [rootnote,second,third,fourth,fifth,sixth,seventh] = result.data 
      if (sixth && seventh) {
        fretCoordinates = [rootnote.fret, second.fret, third.fret, fourth.fret, fifth.fret, sixth.fret, seventh.fret, rootnote.fretrpt, second.fretrpt, third.fretrpt, fourth.fretrpt, fifth.fretrpt, sixth.fretrpt, seventh.fretrpt, ]
      } else {
        fretCoordinates = [rootnote.fret, second.fret, third.fret, fourth.fret, fifth.fret, rootnote.fretrpt, second.fretrpt, third.fretrpt, fourth.fretrpt, fifth.fretrpt, ]
      }
    this.setState({
      fretCoordinates,
      rootNoteCoordinate: resultTwo.data,
    })
    }
    this.props.updateTuning(this.props.index,this.state.string)
  }


  

  handleChange = e => {this.setState({ [e.target.name]: e.target.value });}

  render() {
    
    return (
      <div className="StringAndFret">
        <select value={this.state.string} name="string" onChange={(e) => {this.handleChange(e); this.props.spliceTuning(this.props.index, e);}}>
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
          return <div 
          className="Fret" 
          key={i}>
          {this.state.fretCoordinates.includes(i)? 
          <span className={!this.state.rootNoteCoordinate.includes(i)?"dot fade-in" : "root-dot fade-in"}></span>
          : null}
          {this.props.index ===0? <span className ="fret-number">{i}</span>:null}
          </div> 

        })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(String);