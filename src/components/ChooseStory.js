import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import StoryService from "../services/StoryService";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";

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
        isAuthenticated()
        const {stories} = this.state
        const insertFooter = FooterContent
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

                    {insertFooter}

                </div>
                </div>
            </>
        )
    }
}
export default ChooseStory
