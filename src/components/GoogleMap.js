import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {usePosition} from './usePosition';

const DonePoint = ({ text }) => <div className="pintext"><span>{text}</span><img src="mission_done_pointer.png" alt="mission done" width="30" /></div>
const Point = ({ text }) => <div className="pintext"><span>{text}</span><img src="pointer.gif" alt="pointer" width="30" /></div>
const NextPoint = ({ text }) => <div className="pintext"><a href="#" onClick={() => {document.getElementById("mission-box-1").style.display="block"; document.getElementById("missionboxes").style.display="block";}}><span>{text}</span><img src="here.gif" alt="next mission" width="30" /><img src="pointer-inverted.gif" alt="pointer" className="absolute-image" width="30" /></a></div>
const MeOnMap = ({ }) => <div className="me-on-map"><img src="walking.gif" alt="me" width="30" /></div>
const MissonBox = ({ text, missiontext}) => <div className="mission-box" id="mission-box-1" onClick={() => { document.getElementById("missionboxes").style.display="none"; document.getElementById("mission-box-1").style.display="none" }}><br/><h3>{text}</h3><hr/>{missiontext}<br/><br/><hr/><a href="#" className="start-mission-btn">Start Mission</a></div>

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 0.0,
            longitude: 0.0
        }
    }

    componentDidUpdate() {
        navigator.geolocation.getCurrentPosition((position => {
            this.setState({latitude: position.coords.latitude })
            this.setState({longitude: position.coords.longitude })
        }))
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position => {
            this.setState({latitude: position.coords.latitude })
            this.setState({longitude: position.coords.longitude })
        }))
    }

    render() {
        const {latitude, longitude} = this.state;
        return (
            <>
                <div className="themissionbox" id="missionboxes">
                    <MissonBox
                        text={'The Spider Web'}
                        missiontext={'Climb the spider web as fast as you can! The team with the best average time, to climb the top and back again, wins the mission!'}
                    />
                </div>
                <div style={{marginLeft: '-17px', height: '528px', width: '109%'}}>
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
                        {latitude >= 57.72740 && latitude <= 57.72746 && longitude >= 12.0444967 && longitude <= 12.0445567 ? (
                            <NextPoint
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
                            lat={latitude}
                            lng={longitude}
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
export default GoogleMap
