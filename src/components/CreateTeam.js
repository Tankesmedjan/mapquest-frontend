import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";


export class CreateTeam extends Component {

    constructor() {
        super();
        this.state = {teamName: '', gameId: ''};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addTeam(e) {
        e.preventDefault()
        let data = {teamName: this.state.name, gameId: 1}
        http.post(`/team`, data)
        alert("Successfully registered!")

    }

    render() {

        return (
            <>
                <h1 className="maps-header">MapQuest</h1>
                <div className="createteam-wrapper">
                    <br/>
                    <h3>Choose Team Name</h3>
                    <form onSubmit={(e) => this.addTeam(e)}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter Team Name" className="form-control"
                                   name="name" onChange={this.handleInputChange}/>
                        </div>
                        <p>
                            <button type="submit" className="btn flashy-btn"><Icon.Plus/>Add Team</button>
                        </p>
                        <br/>

                    </form>

                    <div className="wrapper-footer">
                        <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                    </div>
                </div>
            </>
        )
    }
}
export default CreateTeam