import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import MapPointers from "../services/MapPointers";
import TeamAndPlayers from "../services/TeamAndPlayers";
import PropTypes from "prop-types";
import MissionTimer from "./MissionTimer";
import * as Icon from "react-bootstrap-icons";
import GameProgress from "../services/GameProgress";
import MapWelcomeScreen from "./MapWelcomeScreen";

const DonePoint = ({ text }) => <div className="pintext"><span>{text}</span><img src="mission_done_pointer.png" alt="mission done" width="30" /></div>
const Point = ({ text }) => <div className="pintext"><span>{text}</span><img src="pointer.gif" alt="pointer" width="30" /></div>
const NextPoint = ({ text }) => <div className="next-point"><span>{text}</span><img src="here.gif" alt="next mission" width="30" /><img src="pointer-inverted.gif" alt="pointer" className="absolute-image" width="30" /></div>
const MeOnMap = ({direction}) => <div className="me-on-map"><img src="walking.gif" alt="me" width="30" className={direction}/></div>
const MissionBox = ({ text, missiontext, missionid}) => <div><br/><h3>{text}</h3><hr/>{missiontext}<br/><br/><hr/><br/><br/><div style={{display:"none"}}>{missionid}</div></div>

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLatLng: {
                lats: 0,
                lngs: 0
            },
            mapPointers: [],
            teamAndPlayers: {},
            gameId: 1,
            teamId: 8,
            missionId: 0,
            gameProgress: []
        }
    }
    static propTypes = {
        markers: PropTypes.any
    }

    showCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState(prevState => ({
                        currentLatLng: {
                            ...prevState.currentLatLng,
                            lats: position.coords.latitude,
                            lngs: position.coords.longitude
                        }
                    }))
                }
            )
    }
    showMissionTimer = (event) => {
        if (document.getElementById("mission-timer")) {
                document.getElementById("mission-timer").style.display = "block";
                document.getElementById("start-mission-btn-box").style.display = "none";
            let elems = document.getElementsByClassName('mission-buttons')
            for(let i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }
        this.setState({
            missionId: event
        })
        }
    }

    showMissionBox = (indx) => {
        if (
            document.getElementById("missionboxes") &&
            document.getElementById(`mission-box-${indx}`)
        ) {
            document.getElementById("missionboxes").style.display = "block";
            document.getElementById(`mission-box-${indx}`).style.display = "block";
        }
    };
    hideMissionBoxes = () => {
        if (
            document.getElementById("missionboxes") &&
            document.getElementById("mission-box-1")
        ) {
            document.getElementById("missionboxes").style.display = "none";
            let elems = document.getElementsByClassName('mission-box')
            for(let i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }
        }
    };

    loadGameMapPointers(gameId) {
        MapPointers.getAllPointersForGame(gameId)
            .then(response => {
                this.setState( {
                    mapPointers: response.data
                });
            })

    }
    loadGameProgressPointers(gameId, teamId) {
        GameProgress.getGameProgress(gameId, teamId)
            .then(response => {
                this.setState( {
                    gameProgress: response.data
                });
            })
    }
    loadTeamAndPlayers(teamId) {
        TeamAndPlayers.getAllPlayersForTeam(teamId)
            .then(response => {
                this.setState( {
                    teamAndPlayers: response.data
                });
            })
    }

    componentDidUpdate() {
        this.showCurrentLocation()
    }

    componentDidMount() {
        this.loadGameMapPointers(this.state.gameId)
        this.loadGameProgressPointers(this.state.gameId, this.state.teamId)
        this.loadTeamAndPlayers(this.state.teamId)
        this.showCurrentLocation()
    }

    render() {
        const {mapPointers, gameProgress, timer, gameId, teamId, missionId} = this.state;
        const {lats, lngs} = this.state.currentLatLng;
        return (
            <>
                <h1 className="maps-header">MapQuest</h1>
                <MapWelcomeScreen/>
                <div className="themissionbox" id="missionboxes">
                    {mapPointers && mapPointers.map((pointer, index) => (
                            <div key={index} className="mission-box" id={`mission-box-${index}`}>
                                <MissionBox
                                    text={pointer.missionId.missionName}
                                    missiontext={pointer.missionId.missionDescription}
                                    missionid={pointer.missionId.id}
                                />
                                <div className="mission-buttons" id="start-mission-btn-box">
                                    <p><a href="#!" onClick={this.hideMissionBoxes} className="start-mission-btn"> <Icon.Geo /> Back to Map </a></p>
                                    {lats <= (pointer.lat + 0.00003) && lats >= (pointer.lat -0.00003) && lngs <= (pointer.lng + 0.00003) && lngs >= (pointer.lng - 0.00003) ? (
                                            <p><a href="#!" onClick={(event) => this.showMissionTimer(pointer.missionId.id)} className="start-mission-btn"> <Icon.Stopwatch /> Start mission timer & Go! </a></p>
                                        ) : (
                                            <p>You need to get closer to this pin to start the mission!</p>
                                        )
                                    }
                                </div>
                            </div>
                    ))}
                    <div className="mission-wrapper" id="mission-timer" style={{display: "none", zIndex: 100000}}>
                       <MissionTimer isTimerRunning={timer} game={gameId} team={teamId} mission={missionId} />
                    </div>
                </div>
                <div style={{marginLeft: '-0px', height: '695px', width: '100%'}}>
                    <GoogleMapReact
                        onChildClick={this.showMissionBox.bind(this)}
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
                        {mapPointers.map((mappointers, index) => (
                            lats <= (mappointers.lat + 0.00003) && lats >= (mappointers.lat -0.00003) && lngs <= (mappointers.lng + 0.00003) && lngs >= (mappointers.lng - 0.00003) ? (
                                <NextPoint key={index} lat={mappointers.lat} lng={mappointers.lng} text={mappointers.missionId.missionName} />
                            ) : (
                                <Point key={index} lat={mappointers.lat} lng={mappointers.lng} text={mappointers.missionId.missionName} /> )
                            )
                            )
                        }

                        <MeOnMap
                            lat={lats}
                            lng={lngs}
                            text={''}
                            direction={'flipimage'}
                        />
                    </GoogleMapReact>
                </div>
            </>
        )
    }
}
// -- Hard coded values to be replaced with dynamic from API --
GoogleMap.defaultProps = {
    center: {lat: 57.7273132, lng: 12.0443108},
    zoom: 18.7
}
// -- End --
export default GoogleMap;
