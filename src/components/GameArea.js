import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";
import http from "../http-common";
import GoogleMapReact from "google-map-react";
import StoryService from "../services/StoryService";


const Point = () => <div className="pintext"><img src="mission_done_pointer.png" alt="pointer" width="30"/> </div>
let GameId = 0;
export class GameArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            game: []

        }
    }

    loadGameForUser() {
        StoryService.getGameByUserId(sessionStorage.getItem('userid'))
            .then(response => {
                GameId = response.data.id
                this.setState({
                    game: response.data
                })
            })
    }

    chooseGameArea = (event) =>{
            let data = {lat: event.lat, lng: event.lng}
            http.put(`/game/edit?id=${this.state.game[0].id}`, data);
    }
    componentDidMount() {
        this.loadGameForUser()
    }

    render() {
        const {chosenLat, chosenLang} = this.state
        return (
            <>
                <h1 className="maps-header">MapQuest</h1>

                    <div style={{marginLeft: '-0px', height: '695px', width: '100%'}}>
                        <GoogleMapReact
                            onClick={this.chooseGameArea.bind(MouseEvent.pageX)}
                            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            yesIWantToUseGoogleMapApiInternals
                            options={{
                                scrollwheel: false,
                                zoomControl: false,
                                fullscreenControl: false,
                                gestureHandling: 'none',
                                styles: [{stylers: [{'saturation': 80}, {'gamma': 0.8}]}]
                            }}
                        >
                        <Point lat={chosenLat} lng={chosenLang}/>
                        </GoogleMapReact>
                </div>
            </>
        )
    }
}
// -- Hard coded values to be replaced with dynamic from API --
GameArea.defaultProps = {
    center: {lat: 57.7273132, lng: 12.0443108},
    zoom: 16.7
}
// -- End --
export default GameArea