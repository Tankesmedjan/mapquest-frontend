import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import StoryService from "../services/StoryService";
import FooterContent from "./FooterContent";
import CreateStory from "./CreateStory";
import EditStory from "./EditStory";



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

    showEditStoryWrapper = (index) =>{
        if (document.getElementById("ed-box-0"))
        {
            let elems = document.getElementsByClassName('edit-story-box')
            for(let i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }

            document.getElementById(`ed-box-${index}`).style.display="block"
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
                                                        onClick={(e)=>this.showEditStoryWrapper(index)} className="btn flashy-btn">
                                                    <Icon.Wrench/> Edit This Story
                                                </button>
                                            </p>
                                            <div className="edit-story-box" id={`ed-box-${index}`}>
                                                <EditStory
                                                storyyId={stories.id}/>
                                            </div>
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