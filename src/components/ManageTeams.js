import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import FooterContent from "./FooterContent";
import {isAuthenticated} from "../repositories/LoginAuth";
import Teams from "./Teams";
import ManageTeamService from "../services/ManageTeamService";
import CreateTeam from "./CreateTeam";
import PlayersInTeam from "./PlayersInTeam";

export class ManageTeams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            players: []
        }
    }

    getTeamByGameID(gameId) {
    ManageTeamService.getTeamByGameID(1)
        .then(response => {
           this.setState( {
               teams: response.data
           });
        })
    }

    showTeamBox =(index) =>{
        if (document.getElementById("tp-box-0"))
        {
            let elems = document.getElementsByClassName('team-player-box')
            for(let i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }

            document.getElementById(`tp-box-${index}`).style.display="block"
        }
}

    showCreateTeamWrapper(){
        if (document.getElementById("create-team-wrapper")) {
            document.getElementById("create-team-wrapper").style.display="block"
        }
    }


    componentDidMount() {
        this.getTeamByGameID(1)
    }

    render() {
        isAuthenticated()
        const insertFooter = FooterContent
        const {teams} = this.state
        return (
            <>
                <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Manage Teams</h2><br/>
                    <Teams/>
                    <p><button onClick={this.showCreateTeamWrapper} className="btn flashy-btn"><Icon.Plus /> Create Team</button></p>
                    <div className="create-team" id="create-team-wrapper">
                    <CreateTeam/>

                    </div>

                    <div className="team-list">
                        {teams && teams.map((teams, index) => (
                            <div key={index} >
                                <a href="#!" className="team-box" onClick={(e)=>this.showTeamBox(index)}> <h3 className="team-header">{teams.teamName}</h3></a>
                                <div className="team-player-box" id={`tp-box-${index}`}>
                                    <PlayersInTeam
                                        tId={teams.id}/>
                                    </div>
                            </div>

                            ))}
                    </div>

                </div>

                    {insertFooter}

                </div>
            </>
        )
    }

}
export default ManageTeams
