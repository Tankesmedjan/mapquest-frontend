import React, {Component} from "react";

class MissionTimer extends Component {
    constructor(props) {
        super(props);
            this.state = {missionTimer: 0, isRunning: true};

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10
        );
    }

    tick() {
        if (this.state.isRunning === true) {
            this.setState({
                missionTimer: (this.state.missionTimer + 1 / 100)
            });
        } else {
            document.getElementById('runningTimer').style.animation = "none";
            document.getElementById('finished-mission').style.display = "block";
        }
    }

    returnToMap = () => {
        this.setState({
            missionTimer: 0,
            isRunning: true
        })
        document.getElementById("mission-timer").style.display = "none";
        document.getElementById("start-mission-btn-box").style.display = "block";
        document.getElementById("finished-mission").style.display = "none";
        document.getElementById("missionboxes").style.display = "none";
        document.getElementById('runningTimer').style.animation = "pulse";
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
                    <img src={imgUrl} width="30" alt="timer" id="runningTimer" className="runningTimer" /><br/>{missionTimer.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
                </div>
                <br/><p><a href="#!" onClick={() => this.setState({isRunning: false})} className="start-mission-btn">Stop Time</a></p>
                <div id="finished-mission" className="finished-mission" style={{display: "none"}}>
                    <b>Good Job!<br/> Your team finnished this mission in {missionTimer.toLocaleString(navigator.language, {minimumFractionDigits: 2})} seconds.</b>
                    <br/><br/>
                    <a href="#!" onClick={this.returnToMap} className="start-mission-btn">Return to Map</a>
                </div>
            </div>
        )
    }
}

export default MissionTimer;