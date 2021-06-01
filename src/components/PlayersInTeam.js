import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import {isAuthenticated} from "../repositories/LoginAuth";
import ManageTeamService from "../services/ManageTeamService";

function refreshPage(){
    window.location.reload(false);
}

export class PlayersInTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', teamId: this.props.tId, players: []}
    }

    getPlayersByTeamID(teamId) {
        ManageTeamService.getPlayersByTeamID(teamId)
            .then(response => {
                this.setState( {
                    players: response.data
                });
            })
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addPlayer(e) {
        e.preventDefault()

        if (!this.state.name || this.state.name.length <=3){
            alert("Player Name must contain at least 4 letters")
        } else {
            let data = {name: this.state.name, teamId: this.state.teamId}
            http.post(`/player`, data)
            alert("Successfully registered!")
        }
    }

    deletePlayer = (playersId) => {
        http.delete(`/player/delete?id=${playersId}`)
    };

    componentDidMount() {
        this.getPlayersByTeamID(this.state.teamId)
    }

    componentDidUpdate() {
        this.getPlayersByTeamID(this.state.teamId);
    }

    render() {
        if (!isAuthenticated()) return null;
        const {players} = this.state
        return (
            <>
                <form onSubmit={(e) => this.addPlayer(e)}>
                    <input type="text" placeholder="Enter Player Name" className="input-text" name="name" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn " ><Icon.PlusCircleFill /> Add Player</button>
                </form>
                <div className="player-list">
                    {players && players.map((players, index) => (
                        <div key={index}>
                            <div className="player-box"> <span className="h6">{players.name} <a href="#!" onClick={this.deletePlayer.bind(this, players.id)}><Icon.DashCircleFill color={'#FFFFFF'} /></a></span></div>
                        </div>))}
                </div>
                <hr/>
            </>
        )
    }
}
export default PlayersInTeam

