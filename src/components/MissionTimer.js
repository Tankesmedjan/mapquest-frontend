import React, {Component} from "react";

class MissionTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {missionTimer: 0};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10
        );
    }

    tick() {
        this.setState({
            missionTimer: (this.state.missionTimer+1/100)
        });
    }

    render() {
        const {missionTimer} = this.state;
        return (
            <div className="mission-started-wrapper">
                <div className="mission-timer">
                    <img src="/images/timer.gif" width="30" alt="timer" /><br/>{missionTimer.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
                </div>
            </div>
        )
    }
}

export default MissionTimer