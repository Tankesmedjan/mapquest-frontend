import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {isAuthenticated} from "../repositories/LoginAuth";
import http from "../http-common";
import GoogleMapReact from "google-map-react";
import StoryService from "../services/StoryService";

const Point = () => <div className="draw-google-rectangle" id="chosen-area" style={{backgroundImage: "url('images/stripe_bg.png')"}}><img src="mission_done_pointer.png" alt="pointer" width="30"/> </div>
let GameId = 0;
let mapData = "";
export class GameArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            game: [],
            chosenLat: 10.00,
            chosenLng: 10.00
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
        this.setState({
            chosenLat: event.lat,
            chosenLng: event.lng
        })
        if (document.getElementById('chosen-area')) {
            document.getElementById('chosen-area').style.display = 'block';
            document.getElementById('chosen-area').style.zIndex = '1000';
            document.getElementById('chosen-area').style.width = '100px';
            document.getElementById('chosen-area').style.height = '130px';
        }
        if (document.getElementById('confirmation')) {
            document.getElementById('confirmation').style.display = 'block';
        }
        let data = {lat: event.lat, lng: event.lng}
        http.put(`/game/edit?id=${this.state.game[0].id}`, data);
    }

    confirmGameArea() {
        window.location = '/dashboard';
    }

    componentDidMount() {
        this.loadGameForUser()
    }

    render() {
        if (!isAuthenticated()) return null;
        let {chosenLat, chosenLng} = this.state
        return (
            <>
                <h1 className="maps-header">MapQuest</h1>
                    <div className="confirm-area-selection" id="confirmation">
                        <p>Are you happy with the selected game area?</p>
                        <p><a href="#!" onClick={this.confirmGameArea} className="btn flashy-btn"> Yes </a></p>
                    </div>
                    <div style={{marginLeft: '-0px', height: '695px', width: '100%'}}>
                        <GoogleMapReact
                            onClick={this.chooseGameArea.bind(MouseEvent)}
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
                            <Point lat={chosenLat} lng={chosenLng}/>

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
