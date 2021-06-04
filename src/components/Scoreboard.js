import React, {Component} from "react";
import FooterContent from "./FooterContent";
import GameInfo from "../services/GameInfo";
import GameProgress from "../services/GameProgress";
import MapPointers from "../services/MapPointers";
import ManageTeamService from "../services/ManageTeamService";


let generatedGameScores = 10;

class Scoreboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStatus: [],
            gameMissions: [],
            gameTeams: [],
            gameProgress: [],
            htmlRender: ''
        }
    }

    getGameStatus(userid) {
        GameInfo.GameStarted(userid)
            .then(response => {
                this.setState({
                    gameStatus: response.data
                })
            })
    }

    getGameScore(gameId) {
        GameProgress.getSingleGameProgress(gameId)
            .then(resp => {
                this.setState({
                    gameProgress: resp.data
                })
            })
        ManageTeamService.getTeamByGameID(gameId)
            .then(resp => {
                this.setState({
                    gameTeams: resp.data
                })
            })
        MapPointers.getAllPointersForGame(gameId)
            .then(resp => {
                this.setState({
                    gameMissions: resp.data
                })
            })
    }

    componentDidMount() {
        this.getGameStatus(sessionStorage.getItem('userid'));
        this.getGameScore(1);
    }

    render() {
        const insertFooter = FooterContent
        const {gameStatus, gameMissions, gameTeams, gameProgress} = this.state
        let generatedGameScore = generatedGameScores
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Scoreboard</h2><br/>
                    {gameStatus && gameStatus.map((status, index) => (
                        <h5 key={index}>Story: {status.story.storyName}</h5>
                    ))}
                    {gameStatus.length <= 0 ? (
                        <div>You have not selected a story.</div>
                    ) : null}
                    <br/>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td width="50">&nbsp;</td>
                                    {gameTeams && gameTeams.map((team, index) => (
                                        <td key={team.teamName} className="scoreboard-teams">{team.teamName}</td>
                                    ))}

                                <td width="50">&nbsp;</td></tr><tr><td width="50">&nbsp;</td>

                    {
                        gameProgress && gameProgress.map((progress, index) => (


                        gameMissions
                            .filter(mission => mission.missionId.id === progress.missionid)
                            .map(filteredMission => (
                                <td key={index}> {filteredMission.missionId.winnerScore} </td>
                        ))

                        ))
                    }

                                <td width="50">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                {insertFooter}
            </div>
        )
    }
}

export default Scoreboard
