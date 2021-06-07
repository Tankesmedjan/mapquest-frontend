import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";


export class EditMission extends Component {

    constructor(props) {
        super(props);
        this.state = {missionName: '', missionDescription: '', missionId: this.props.missionnId,
            shortDescription: ''
        };
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    editMission(e) {
        e.preventDefault()
        let data = {missionName: this.state.missionName, missionDescription: this.state.missionDescription, shortDescription: this.state.shortDescription}
        http.put(`/mission/edit?id=${this.state.missionId}`, data)
        alert("Successfully updated this mission!")

    }



    render() {
        return (
            <>

                <form onSubmit={(e) => this.editMission(e)}>
                    {}
                    <input type="text" placeholder="Enter Mission Name" className="input-text" name="missionName" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Short Description" className="input-text" name="shortDescription" onChange={this.handleInputChange}/>
                    <textarea placeholder="Enter Descriptions" className="input-text" name="missionDescription" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill /> Edit Mission</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default EditMission