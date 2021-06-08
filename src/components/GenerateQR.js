import React, {Component} from "react";
import FooterContent from "./FooterContent";
import ManageTeamService from "../services/ManageTeamService";
import QRCode from "react-qr-code";


export class GenerateQR extends Component {
    constructor() {
        super();
        this.state = {
            teams: [],
            gameid: 1
        }
    }

    getTeamByGameID(gameId) {
        ManageTeamService.getTeamByGameID(gameId)
            .then(response => {
                this.setState({
                    teams: response.data
                });
            })
    }

    showQRBox = (index) => {
        if (document.getElementById("qr-box-0")) {
            let elems = document.getElementsByClassName('create-qr-box')
            for (let i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }

            document.getElementById(`qr-box-${index}`).style.display = "block"
        }
    }

    componentDidMount() {
        this.getTeamByGameID(this.state.gameid)
    }

    render() {
        const {teams} = this.state
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Generate QR</h2>
                    <br/>
                    <div className="team-list">
                        {teams && teams.map((teams, index) => (
                            <div key={index}>
                                <p>
                                    <button className="btn flashy-btn" onClick={(e) => this.showQRBox(index)}>
                                        <h5 className="team-header">{teams.teamName} </h5></button>
                                </p>
                                <div className="create-qr-box" id={`qr-box-${index}`}>
                                    <QRCode value={`https://151.177.147.211:3000/googlemap?gameid=${this.state.gameid}&teamid=${teams.id}`}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <FooterContent />
            </div>
        )
    }
}
export default GenerateQR