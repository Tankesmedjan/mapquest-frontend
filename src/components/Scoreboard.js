import React, {Component} from "react";
import FooterContent from "./FooterContent";
import GameInfo from "../services/GameInfo";
import GameProgress from "../services/GameProgress";
import MapPointers from "../services/MapPointers";
import ManageTeamService from "../services/ManageTeamService";

let progressArray = [];
let scoreArray = [];
let winner = 0;

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
        const {gameStatus, gameMissions, gameTeams, gameProgress} = this.state
        let ii = 0
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

                                <td width="50">&nbsp;</td></tr>

                            {
                                    gameProgress && gameProgress.map((progress, index) => (
                                        // eslint-disable-next-line no-sequences
                                        progressArray[index] = {'teamid': progress.teamid, 'missionid': progress.missionid, 'time': progress.missionTime} , null
                                    )
                                    )
                                    }

                                {
                                    progressArray[0] !== undefined && progressArray[1] !== undefined ?
                                    progressArray[0].time < progressArray[1].time ? (winner = progressArray[0].teamid , null) : (winner = progressArray[1].teamid ,null)
                                    : null}

                                {
                                    gameProgress && gameProgress.map((progress, index) => (
                                    gameMissions
                                        .filter(mission => mission.missionId.id === progress.missionid)
                                        .map(filteredMission => (
                                            winner === progress.teamid ? ( scoreArray[index] = filteredMission.missionId.winnerScore, null ) : ( scoreArray[index] = 0, null )
                                    ))

                                    ))
                                }
                                    <tr><td> </td><td className="scoreboard-scores-even">{scoreArray[ii]}</td><td className="scoreboard-scores-even">{scoreArray[(ii+1)]}</td><td> </td></tr>
                                    <tr><td> </td><td className="scoreboard-scores-even">{scoreArray[ii+2]}</td><td className="scoreboard-scores-even">{scoreArray[(ii+3)]}</td><td> </td></tr>
                        </tbody>
                    </table>
                </div>
                <FooterContent/>
            </div>
        )
    }
}

export default Scoreboard
