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
        }
    }

    render() {
        const {missionTimer, isRunning} = this.state;
        let imgUrl = "/images/timer.png";
        if (isRunning) imgUrl = "/images/timer.gif";
        return (
            <div className="mission-started-wrapper">
                <div className="mission-timer">
                    <img src={imgUrl} width="30" alt="timer" id="runningTimer" /><br/>{missionTimer.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
                </div>
                <br/><p><a href="#!" onClick={() => this.state.isRunning=false} className="start-mission-btn">Stop Time</a></p>
            </div>
        )
    }
}

export default MissionTimer