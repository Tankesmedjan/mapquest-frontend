import React, {Component} from "react";
import FooterContent from "./FooterContent";
import HasStartedGame, {hasStartedGame} from "../repositories/HasStartedGame";


class Scoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStatus: []
        }
    }

    getGameStatus(userid) {
        HasStartedGame.GameStarted(userid)
            .then(response => {
                this.setState({
                    gameStatus: response.data
                })
                console.log(this.state.gameStatus)
            })
    }

    componentDidMount() {
        this.getGameStatus(sessionStorage.getItem('userid'))
    }

    render() {
        const insertFooter = FooterContent
        const {gameStatus} = this.state
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Scoreboard</h2><br/>
                    {gameStatus && gameStatus.map((status, index) => (
                        <h5 key={index}>{status.story.storyName}</h5>
                    ))}
                    {gameStatus.length <= 0 ? (
                        <div>You have not selected a story.</div>
                    ) : null }
                </div>
                {insertFooter}
            </div>
        )
    }
}

export default Scoreboard