import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import StoryService from "../services/StoryService";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";
import http from "../http-common";
import Login from "./Login";

export class GameArea extends Component {

    constructor(props) {
        super(props)
        this.state = {

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
        const insertFooter = FooterContent
        return (
            <>

                <h1 className="maps-header">MapQuest</h1>
                <div className="container">
                    <br/>
                    <div className="story-wrapper">


                        {insertFooter}

                    </div>
                </div>
            </>
        )
    }
}
export default GameArea