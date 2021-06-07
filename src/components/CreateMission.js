import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";


export class CreateMission extends Component {

    constructor() {
        super();
        this.state = {missionName: '', missionDescription: '', shortDescription: ''};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addMission(e) {
        e.preventDefault()

        if (!this.state.missionName || this.state.missionName.length <=3){
            alert("Mission Name must contain at least 4 letters")
        } else {
            let data = {missionName: this.state.missionName, missionDescription: this.state.missionDescription, shortDescription: this.state.shortDescription}
            http.post(`/mission`, data)
            alert("Mission Successfully registered!")
        }
    }


    render() {

        return (
            <>

                <form onSubmit={(e) => this.addMission(e)}>
                    {}
                    <input type="text" placeholder="Enter Mission Name" className="input-text" name="storyName" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Full Description" className="input-text" name="missionDescription" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Short Description" className="input-text" name="shortDescription" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill /> Add Mission</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default CreateMission