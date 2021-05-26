import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import QrReader from 'react-qr-scanner';

export class ScanQR extends Component {
    constructor(props){
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data){
        this.setState({
            result: data,
        })
    }
    handleError(err){
        console.error(err)
    }

    render() {
        const qrStyle = {
            height: 280,
            width: 280,
            facingMode: "rear",
            chooseDeviceId: 1,
        }
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Welcome to MapQuest</h2>
                    <QrReader
                        delay={this.state.delay}
                        style={qrStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                    <input type="text" placeholder="Enter QR code here: " name="QRcode" style={{padding: '5px', width: '200px' }} /><button className="btn" type="submit"><Icon.BoxArrowInRight /></button>

                </div>
                <div className="wrapper-footer">
                    <div className="logo-holder">
                        <img className="logo-img" src="/images/mapquest-logo.png" alt="logo" width="200"/><br/>
                        &reg;&copy; 2021 - Tankesmedjan. <a href="mailto:tankesmedjan@protonmail.com">Mail us</a>
                    </div>
                    <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                </div>
            </div>
        )
    }
}
export default ScanQR
