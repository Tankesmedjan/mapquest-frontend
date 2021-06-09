import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import React, {Component} from "react";
import FooterContent from "./FooterContent";
import {isAuthenticated} from "../repositories/LoginAuth";
import ManageTeamService from "../services/ManageTeamService";
import CreateTeam from "./CreateTeam";
import PlayersInTeam from "./PlayersInTeam";
import http from "../http-common";
import BackButton from "./BackButton";

export class ManageTeams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            players: [],
            gameid: 1
        }
    }

    getTeamByGameID(gameId) {
    ManageTeamService.getTeamByGameID(gameId)
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

    deleteTeam = (teamId) => {
        http.delete(`/team/delete?id=${teamId}`)
    };

    componentDidMount() {
        this.getTeamByGameID(this.state.gameid)
    }

    render() {
        if (!isAuthenticated()) return null;
        const {teams} = this.state
        return (
            <>
                <div className="container">
                <div className="wrapper-main"><BackButton/>
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Manage Teams</h2><br/>
                    <p><button onClick={this.showCreateTeamWrapper} className="btn flashy-btn"><Icon.Plus /> Create Team</button></p>
                    <div className="create-team" id="create-team-wrapper">
                    <CreateTeam/>

                    </div>

                    <div className="team-list">
                        {teams && teams.map((teams, index) => (
                            <div key={index} >
                                <h3 className="team-header"><a href="#!" className="team-box" onClick={(e)=>this.showTeamBox(index)}>{teams.teamName}</a> <a href="#!" onClick={this.deleteTeam.bind(this, teams.id)}><Icon.DashCircleFill className="icon-dash" /></a></h3>
                                <div className="team-player-box" id={`tp-box-${index}`}>
                                    <PlayersInTeam tId={teams.id}/>
                                    </div>
                            </div>

                            ))}
                    </div>
                </div>
                <FooterContent/>
                </div>
            </>
        )
    }

}
export default ManageTeams
