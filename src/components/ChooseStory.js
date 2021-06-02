import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import StoryService from "../services/StoryService";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";
import http from "../http-common";
import Login from "./Login";

export class ChooseStory extends Component {

constructor(props) {
    super(props)
    this.state = {
        stories: [],
        user: []
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
addGameSession(e, storyId){
    e.preventDefault()

    let data = {storyId: storyId, userId: sessionStorage.getItem('userid'),
    startLat: null, startLong: null, endLat: null, endLong: null}
    http.post(`/game`, data)
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
                        <p> <button className="btn flashy-btn" onClick={(e)=>this.addGameSession(e, stories.id)}><Icon.PlayFill /> Choose this story</button></p>
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
