import React, {Component} from "react";
import FooterContent from "./FooterContent";
import HasStartedGame, {hasStartedGame} from "../services/GameInfo";
import GameInfo from "../services/GameInfo";
import GameProgress from "../services/GameProgress";
import TeamAndPlayers from "../services/TeamAndPlayers";
import MapPointers from "../services/MapPointers";


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
        TeamAndPlayers.getAllTeamsForGame(gameId)
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

    mapGameScore() {
        let htmlRender = ''
        this.state.gameMissions.map((mission) => {
                let currentMissionId = mission.missionId.id
                let currentMissionName = mission.missionId.missionName
                let currentMissionScore =mission.missionId.winnerScore
                this.state.gameProgress.map((progress) => {
                    console.log(progress.missionid)
                        if (progress.missionid === currentMissionId) {
                            htmlRender += currentMissionName + " " + currentMissionScore
                            console.log(htmlRender)
                        }
                        this.setState({
                            htmlRender: htmlRender
                        })
                    }
                )

            }
        )
    }

    componentDidMount() {
        this.getGameStatus(sessionStorage.getItem('userid'))
        this.getGameScore(1)
        this.mapGameScore()
    }

    render() {
        const insertFooter = FooterContent
        const {gameStatus, htmlRender} = this.state
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Scoreboard</h2><br/>
                    {gameStatus && gameStatus.map((status, index) => (
                        <h5 key={index}>{status.story.storyName}</h5>
                    ))}
                    {gameStatus.length <= 0 ? (
                        <div>You have not selected a story.</div>
                    ) : htmlRender}
                </div>
                {insertFooter}
            </div>
        )
    }
}

export default Scoreboard