import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import StoryService from "../services/StoryService";
import PropTypes from "prop-types";

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
    const {stories} = this.state
        return (
            <>
                <h1 className="maps-header">MapQuest</h1>
                <div className="story-wrapper">
                    {stories && stories.map((stories, index) => (
                    <div key={index} className="story-box">
                        <h4 >{stories.storyName}</h4>
                        {stories.storyText}
                        <p><button className="btn flashy-btn"><Icon.PlayFill /> Choose this story</button></p>
                        <br/>
                        <br/>
                    </div>
                    ))}

                    <div className="wrapper-footer">
                        <img className="skyline-image" src="/images/gothenburg-skyline.png" alt="skyline" width="440"/>
                    </div>
                </div>
            </>
        )
    }
}
export default ChooseStory