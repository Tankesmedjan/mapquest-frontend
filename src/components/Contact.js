import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import FooterContent from "./FooterContent";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";

export class Contact extends Component {
    constructor() {
        super();
        this.state = {fullName: '', email: '', message: ''}
    }

    addFeedback(e) {
        e.preventDefault()

        let data = {fullName: this.state.fullName, email: this.state.email, message: this.state.message}
        if(data.email.length === 0 || data.message.length === 0 || data.fullName === 0){
            alert('You need to enter every field to send feedback.')
        }else {
            http.post(`/feedback`, data)
        }
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    render() {
        const insertFooter = FooterContent
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Contact us</h2>
                    <hr/>
                    <br/>
                    <b><h5>We'd love some feedback!</h5>
                        MapQuest likes to create and develop with it's customers.<br/>
                        Feel free to tell us what's on your mind!</b><br/>
                    <br/>
                    <br/>
                    <form onSubmit={(e) => this.addFeedback(e)}>
                        <div className="form-group">
                        <input type="text" placeholder="Your Name" className="input-contact-text" name="fullName" onChange={this.handleInputChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                        <input type="text" placeholder="Email" className="input-contact-text" name="email" onChange={this.handleInputChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                        <textarea placeholder="Message" className="input-message-text" name="message" onChange={this.handleInputChange}/>
                        </div>
                    <p>
                        <br/>
                        <button className="btn flashy-btn"><Icon.Envelope/> Submit</button>
                    </p></form>
                </div>

                {insertFooter}

            </div>
        )
    }
}

export default Contact