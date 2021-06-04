import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import StoryService from "../services/StoryService";
import FooterContent from "./FooterContent";
import http from "../http-common";
import CreateStory from "./CreateStory";



export class AdminStories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: []
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

    showCreateStoryWrapper(){
      if (document.getElementById("create-story-wrapper")){
          document.getElementById("create-story-wrapper").style.display="block"
      }
    }

    componentDidMount() {
        this.getAllStories()
    }

    render() {

        const {stories} = this.state
        const insertFooter = FooterContent
        return (
            <>

                <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Choose Story</h2>
                        <br/>
                            <div className="story-wrapper">
                                <p><button onClick={this.showCreateStoryWrapper} className="btn flashy-btn"> <Icon.Plus/> Create New Story</button></p>
                                <div className="create-story" id="create-story-wrapper">
                                    <CreateStory/>
                                </div>
                                {stories && stories.map((stories, index) => (
                                        <div key={index} className="story-box">
                                            <h4 className="maps-header">{stories.storyName}</h4>
                                            <h6 className="story-text">{stories.storyText}</h6>
                                            <p>
                                                <button className="btn flashy-btn"
                                                        onClick={(e) => this.addGameSession(e, stories.id)}>
                                                    <Icon.Wrench/> Edit This Story
                                                </button>
                                            </p>
                                            <br/>
                                        </div>
                                    )
                                )
                                }
                            </div>
                    </div>
                    {insertFooter}
                </div>
            </>
        )
    }
}

export default AdminStories