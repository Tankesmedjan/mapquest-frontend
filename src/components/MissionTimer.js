import React, {Component} from "react";
import * as Icon from "react-bootstrap-icons";
import GameProgress from "../services/GameProgress";

class MissionTimer extends Component {
    constructor(props) {
        super(props);
            this.state = {missionTimer: 0, isRunning: true, gameId: this.props.game, teamId: this.props.team, missionId: this.props.mission}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10
        );
        document.getElementById("finished-wrapper").style.display = "none";
    }

    tick() {
         if (this.state.isRunning === true && document.getElementById("mission-timer").style.display === "block") {
            this.setState({
                missionTimer: (this.state.missionTimer + 1 / 100)
            });

        }
         if (this.state.isRunning === false) {
             this.stopTimerButton()
         }
    }


    stopTimerButton(){
        document.getElementById("finished-wrapper").style.display = "block";
        document.getElementById('runningTimer').style.animation = "none 1s infinite";
    }

    returnToMap = () => {
        let progressData = {'gameid': this.state.gameId, 'missionid': this.props.mission, 'teamid': this.state.teamId, 'missionTime': this.state.missionTimer, 'qanswer': null}
        GameProgress.saveGameProgress(progressData)
        this.setState({
            missionTimer: 0,
            isRunning: true
        })
        document.getElementById("mission-timer").style.display = "none";
        document.getElementById("start-mission-btn-box").style.display = "block";
        document.getElementById("finished-wrapper").style.display = "none";
        document.getElementById("missionboxes").style.display = "none";
        document.getElementById('runningTimer').style.animation = "pulse 1s infinite";
        let elems = document.getElementsByClassName('mission-box')
        for(let i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
        elems = document.getElementsByClassName('mission-buttons')
        for(let i = 0; i < elems.length; i++) {
            elems[i].style.display = 'block';
        }
    }

    render() {
        const {missionTimer, isRunning} = this.state;
        let imgUrl = "/images/timer.png";
        if (isRunning) imgUrl = "/images/timer.gif";
        return (
            <div className="mission-started-wrapper">
                <div className="mission-timer">
                    <img src={imgUrl} width="30" alt="timer" id="runningTimer" className="runningTimer" /><br/>{missionTimer.toLocaleString(navigator.language, {minimumFractionDigits: 2})} s.
                </div>
                <br/><p><a href="#!" onClick={() => this.setState({isRunning: false})} className="start-mission-btn"> <Icon.StopwatchFill /> F I N I S H ! </a></p>
                <div id="finished-wrapper" className="finished-mission" style={{display: "none"}}>
                    <br/><h5>Good Job!</h5><b>Your team finished this mission in just {missionTimer.toLocaleString(navigator.language, {minimumFractionDigits: 2})} seconds.</b>
                    <br/><br/>
                    <a href="#!" onClick={() => this.returnToMap() } className="start-mission-btn"> <Icon.Geo /> Save Mission Result & Back to Map </a>
                </div>
            </div>
        )
    }
}

export default MissionTimer;
