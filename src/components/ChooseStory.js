import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import StoryService from "../services/StoryService";
import PropTypes from "prop-types";
import {isAuthenticated} from "../repositories/LoginAuth";

export class ChooseStory extends Component {

constructor(props) {
    super(props)
    this.state = {
        stories: []
    }
}
getAllStories() {
    StoryService.getAllStories()
        .then(response =>{
            this.setState({
                stories: response.data
            })
        })
}

componentDidMount() {
    this.getAllStories()
}

    render() {
        {
            isAuthenticated()
        }
        const {stories} = this.state
        return (
            <>

                <h1 className="maps-header">MapQuest</h1>
                <div className="container">
                <br/>
                <div className="story-wrapper">
                    {stories && stories.map((stories, index) => (
                    <div key={index} className="story-box">
                        <h4 className="maps-header">{stories.storyName}</h4>
                        <h6 className="story-text">{stories.storyText}</h6>
                        <p><button className="btn flashy-btn"><Icon.PlayFill /> Choose this story</button></p>
                        <br/>

                    </div>
                    ))}

                    <div className="wrapper-footer">
                        <div className="logo-holder">
                        </div>
                        <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
export default ChooseStory