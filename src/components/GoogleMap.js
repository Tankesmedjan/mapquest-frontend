import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import MapPointers from "../services/MapPointers";

const DonePoint = ({ text }) => <div className="pintext"><span>{text}</span><img src="mission_done_pointer.png" alt="mission done" width="30" /></div>
const Point = ({ text }) => <div className="pintext"><span>{text}</span><img src="pointer.gif" alt="pointer" width="30" /></div>
const NextPoint = ({ text }) => <div className="pintext"><span>{text}</span><img src="here.gif" alt="next mission" width="30" /><img src="pointer-inverted.gif" alt="pointer" className="absolute-image" width="30" /></div>
const MeOnMap = () => <div className="me-on-map"><img src="walking.gif" alt="me" width="30" /></div>
const MissionBox = ({ text, missiontext}) => <div><br/><h3>{text}</h3><hr/>{missiontext}<br/><br/><hr/><a href="#!" className="start-mission-btn">Start Mission</a></div>

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLatLng: {
                lat: 0,
                lng: 0
            },
            isMarkerShown: false,
            mappointers: []
        }
    }

    showCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState(prevState => ({
                        currentLatLng: {
                            ...prevState.currentLatLng,
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        isMarkerShown: true
                    }))
                }
            )
    }

    showMissionBox = () => {
        if (
            document.getElementById("missionboxes") &&
            document.getElementById("mission-box-1")
        ) {
            document.getElementById("missionboxes").style.display = "block";
            document.getElementById("mission-box-1").style.display = "block";
        }
    };
    hideMissionBox = () => {
        if (
            document.getElementById("missionboxes") &&
            document.getElementById("mission-box-1")
        ) {
            document.getElementById("missionboxes").style.display = "none";
            document.getElementById("mission-box-1").style.display = "none";
        }
    };

    loadGameMapPointers() {
        MapPointers.getAllPointersForGame(1)
            .then(response => {
                this.setState( {
                    mappointers: response.data
                });
            })
    }

    componentDidUpdate() {
        this.showCurrentLocation()
    }

    componentDidMount() {
        this.loadGameMapPointers(1);
        this.showCurrentLocation()
    }

    render() {
        const {mappointers} = this.state;
        const {lat, lng} = this.state.currentLatLng;
        return (
            <>
                <div className="themissionbox" id="missionboxes">
                    {mappointers && mappointers.map((pointer, index) => (
                        <div key={index} className="mission-box" id="mission-box-1" onClick={this.hideMissionBox}>
                            <MissionBox
                                key={index}
                                text={pointer.missionId.missionName}
                                missiontext={pointer.missionId.missionDescription}
                            />
                        </div>
                    ))};

                </div>
                <div style={{marginLeft: '-0px', height: '528px', width: '100%'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        options={{
                            scrollwheel: false,
                            zoomControl: false,
                            fullscreenControl: false,
                            gestureHandling: 'none',
                            styles: [{stylers: [{'saturation': 100}, {'gamma': 0.5}]}]
                        }}
                    >
                        {lat >= 47.72740 && lat <= 67.72746 && lng >= 2.0444967 && lng <= 22.0445567 ? (
                            <NextPoint
                            onClick={this.showMissionBox}
                            lat={57.72743}
                            lng={12.0445267}
                            text={'Spider webb'}
                            />
                        ) : (<Point
                            lat={57.72743}
                            lng={12.0445267}
                            text={'Spider webb'}
                        />)}
                        <Point
                            lat={57.7274417}
                            lng={12.0441433}
                            text={'the Sand box'}
                        />
                        <Point
                            lat={57.7274433}
                            lng={12.0437817}
                            text={'Mini houses'}
                        />
                        <DonePoint
                            lat={57.7272933}
                            lng={12.04414}
                            text={'the Big tree'}
                        />
                        <Point
                            lat={57.7272033}
                            lng={12.0446683}
                            text={'the Course'}
                        />
                        <MeOnMap
                            lat={lat}
                            lng={lng}
                            text={''}
                        />
                    </GoogleMapReact>
                </div>
            </>
        )
    }
}

GoogleMap.defaultProps = {
    center: {lat: 57.7273132, lng: 12.0443108},
    zoom: 18.7
};
export default GoogleMap;
