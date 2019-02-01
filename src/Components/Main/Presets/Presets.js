import React, { Component } from "react";
import "./Presets.scss"
import { connect } from 'react-redux';
import axios from "axios";
const apiUrl = '/api/'

class Presets extends Component {
    constructor(props){
        super(props);
        this.state={
            userTunings: [],
            edit: false,
            save: false,
            delete: false,
            update: false,
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
                {this.state.edit? 
                <input name="tuningName"value="edit"style={{width: "300px"}}/>
                :null
                }
                {this.state.save?
                <input name="updateName" value="save"style={{width: "300px"}}/>
                :null
                }
                {!this.state.edit && !this.state.save && !this.state.update?
                <select name="tuningName" onChange={this.props.handleChange}style={{width: "300px"}} disabled={!this.props.user}>
                    <option  hidden>{this.props.user? "Choose Preset": "Login To Save Presets"}</option>
                    {this.state.userTunings.map( (val,i) => {
                        return <option key={i} value={val}>{val}</option>
                    })}
                </select>
                :null
                }
                <button name="edit" onClick={this.toggle} className="Preset-buttons" disabled={!this.props.userTuningName} >Edit</button>
                <button name="delete" onClick={this.toggle} className="Preset-buttons" disabled={!this.props.userTuningName} >Delete</button>
                <button name="save" onClick={this.toggle} className="Preset-buttons" disabled={!this.props.user} >Save</button>
                

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
  }

export default connect(mapStateToProps)(Presets);