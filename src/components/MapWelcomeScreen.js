import React, {Component} from "react";
import ManageTeamService from "../services/ManageTeamService";

class MapWelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameid: this.props.game,
            teamid: this.props.team,
            storyname: "",
            teamname: "",
            storytext: ""
        }
    }

    hideThisWindow() {
        document.getElementById("welcomescreen").style.display = "none"
    }

    getTeamAndMission() {
        ManageTeamService.getPlayersByTeamID(this.props.team)
            .then(response => {
                this.setState({
                    teamname: response.data[0].team.teamName,
                    storyname: response.data[0].team.game.story.storyName,
                    storytext: response.data[0].team.game.story.storyText
                })
            })
    }

    componentDidMount() {
        this.getTeamAndMission()
    }
    render() {
        const {storyname, teamname, storytext} = this.state;
        return (
            <div className="welcome-screen-wrapper" id="welcomescreen">
                <div className="welcome-screen">
                    <h3>Welcome to the Story Board</h3><br/>
                    <h6>Chosen story: {storyname}</h6>
                    <h6>You're playing in team: {teamname}</h6>
                    <hr/>
                    <div style={{paddingLeft: "50px", paddingRight: "50px"}}> {storytext}
                    </div>

                    <hr/>
                    <button onClick={this.hideThisWindow} className="btn btn-dark"> Let's start the game!</button>
                </div>
            </div>
        )
    }
}
export default MapWelcomeScreen