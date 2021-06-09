import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QrReader from 'react-qr-scanner';
import FooterContent from "./FooterContent";

export class ScanQR extends Component {
    constructor(props){
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
            QRcode: ""
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
                </div>

                <FooterContent/>

            </div>
        )
    }
}
export default ScanQR
