import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import StoryService from "../services/StoryService";
import {isAuthenticated} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";
import http from "../http-common";
import {Redirect} from "react-router-dom";


export class ChooseStory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            redirect: false,
            game: []
        }
    }

    getAllStories() {
        StoryService.getAllStories()
            .then(response => {
                this.setState({
                    stories: response.data
                })
            })
    }

    getGameSession() {
        StoryService.getGameByUserId(sessionStorage.getItem('userid'))
            .then(response => {
                this.setState({
                    game: response.data
                })
            })
    }

    addGameSession(e, storyId) {
        e.preventDefault()

        let data = {
            storyId: storyId, userId: sessionStorage.getItem('userid'),
            startLat: null, startLong: null, endLat: null, endLong: null
        }
        http.post(`/game`, data);
        this.setState({redirect: true})
    }

    componentDidMount() {
        this.getAllStories()
        this.getGameSession()
    }

    render() {
        isAuthenticated()
        const {stories, redirect, game} = this.state
        const insertFooter = FooterContent
        return (
            <>
                {redirect ? (<Redirect push to="/gamearea"/>) : null}
                <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Choose Story</h2>
                        <br/>
                        {game && game.map((gam, index) => (
                            <h5 key={index} className="maps-header">You have already chosen the
                                story <br/>"{gam.story.storyName}" </h5>
                        ))}
                        {game.length <= 0 ? (
                            <div className="story-wrapper">
                                {stories && stories.map((stories, index) => (
                                        <div key={index} className="story-box">
                                            <h4 className="maps-header">{stories.storyName}</h4>
                                            <h6 className="story-text">{stories.storyText}</h6>
                                            <p>
                                                <button className="btn flashy-btn"
                                                        onClick={(e) => this.addGameSession(e, stories.id)}>
                                                    <Icon.PlayFill/> Choose this story
                                                </button>
                                            </p>
                                            <br/>
                                        </div>
                                    )
                                )
                                }
                            </div>
                        ) : null
                        }
                    </div>
                    {insertFooter}
                </div>
            </>
        )
    }
}

export default ChooseStory
