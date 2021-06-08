import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {isAuthenticated} from "../repositories/LoginAuth";
import GoogleMapReact from "google-map-react";
import StoryService from "../services/StoryService";


const Point = ({mission}) => <div className="place-pin-holder">{mission}<br/><img src="pointer.gif" alt="pointer" width="30"/></div>

export class PlacePins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: [],
            chosenLat: 10.00,
            chosenLng: 10.00,
            startLat: 10.00,
            startLng: 10.00
        }
    }

    loadGameForUser() {
        StoryService.getGameByUserId(sessionStorage.getItem('userid'))
            .then(response => {
                this.setState({
                    game: response.data,
                    startLat: response.data[0].lat,
                    startLng: response.data[0].lng
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
            document.getElementById('chosen-area').style.width = '150px';
            document.getElementById('chosen-area').style.height = '200px';
        }
        if (document.getElementById('confirmation')) {
            document.getElementById('confirmation').style.display = 'block';
        }
        let data = {lat: event.lat, lng: event.lng}
        //http.put(`/game/edit?id=${this.state.game[0].id}`, data);
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
                        <p>Are you happy with the selected mission's pin placement?</p>
                        <p><a href="#!" onClick={this.confirmGameArea} className="btn flashy-btn"> Yes </a></p>
                    </div>
                    <div style={{marginLeft: '-0px', height: '695px', width: '100%'}}>
                        <GoogleMapReact
                            onClick={this.chooseGameArea.bind(MouseEvent)}
                            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                            center={{lat: this.state.startLat, lng: this.state.startLng}}
                            defaultZoom={18.5}
                            yesIWantToUseGoogleMapApiInternals
                            options={{
                                scrollwheel: false,
                                zoomControl: false,
                                fullscreenControl: false,
                                gestureHandling: 'none',
                                styles: [{stylers: [{'saturation': 80}, {'gamma': 0.8}]}]
                            }}
                        >
                            <Point lat={chosenLat} lng={chosenLng} mission="Mission 1"/>

                        </GoogleMapReact>
                </div>
            </>
        )
    }
}
export default PlacePins
