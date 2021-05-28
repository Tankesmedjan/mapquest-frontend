import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import QrReader from 'react-qr-scanner';
import FooterContent from "./FooterContent";

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
        const insertFooter = FooterContent
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

                {insertFooter}

            </div>
        )
    }
}
export default ScanQR
