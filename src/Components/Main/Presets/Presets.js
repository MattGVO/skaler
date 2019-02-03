import React, { Component } from "react";
import "./Presetscss"
import { connect } from 'react-redux';
import axios from "axios";
const apiUrl = '/api/'

class Presets extends Component {
    constructor(props){
        super(props);
        this.state={
            userTunings: [],
        }
    }

    async componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user){
            let res = await axios.post(`${apiUrl}get-all-tunings`, {
              user: this.props.user,
            });
            let userTunings = res.data.map((val, i) => val.tuningname)
            this.setState({
              userTunings 
            })
        }
        if(this.props.userTunings !== prevProps.userTunings){
            this.setState({
                userTunings: this.props.userTunings
            })
        }
    }

    toggle = e => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })
    }

    
    render(){
        console.log('this.props', this.props)
        return(
            <div id="Preset-container">
                <span style={{marginRight: "5px"}}>Presets:</span>
                {this.props.edit? 
                <input name="updateName" maxLength="44" onChange={this.props.handleChange} defaultValue={this.props.userTuningName} style={{width: "300px"}}/>
                :null
                }
                {this.props.save?
                <input name="updateName" maxLength="44" onChange={this.props.handleChange} placeholder="Preset Name" style={{width: "300px"}}/>
                :null
                }
                {!this.props.edit && !this.props.save?
                <select name="tuningName" onChange={this.props.handleChange} style={{width: "300px"}} disabled={!this.props.user}>
                    <option  hidden>{this.props.user? "Choose Preset": "Login To Save Presets"}</option>
                    {this.state.userTunings.map( (val,i) => {
                        return <option key={i} value={val}>{val}</option>
                    })}
                </select>
                :null
                }
                <button name="edit" onClick={this.props.toggle} className="Preset-buttons" disabled={!this.props.userTuningName || this.props.edit || this.props.delete || this.props.save} >Edit</button>
                <button name="delete" onClick={this.props.toggle} className="Preset-buttons" disabled={!this.props.userTuningName || this.props.edit || this.props.delete || this.props.save} >Delete</button>
                <button name="save" onClick={this.props.toggle} className="Preset-buttons" disabled={!this.props.user || this.props.edit || this.props.delete || this.props.save} >Save</button>
                

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
  }

export default connect(mapStateToProps)(Presets);