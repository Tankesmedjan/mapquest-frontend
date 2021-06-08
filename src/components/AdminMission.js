import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import FooterContent from "./FooterContent";
import EditMission from "./EditMission";
import MissionService from "../services/MissionService"
import http from "../http-common";
import CreateMission from "./CreateMission";
import StoryService from "../services/StoryService";

export class AdminMission extends Component {
    constructor(props) {
        super(props)
        this.state = {
            missions: [],
            stories: []
        }
    }

    getAllMissions() {
        MissionService.getAllMissions()
            .then(response => {
                this.setState({
                    missions: response.data
                })
            })
    }

    getAllStories() {
        StoryService.getAllStories()
            .then(response => {
                this.setState( {
                    stories: response.data
                })
            })
    }

    showCreateMissionWrapper(){
        if (document.getElementById("create-story-wrapper")){
            document.getElementById("create-story-wrapper").style.display="block"
        }
    }

    showEditMissionWrapper = (index) =>{
        if (document.getElementById("ed-box-0"))
        {
            let elems = document.getElementsByClassName('edit-story-box')
            for(let i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }

            document.getElementById(`ed-box-${index}`).style.display="block"
        }
    }
    deleteMission = (missionId) =>{
        http.delete(`/mission/delete?id=${missionId}`)
        alert("Mission deleted.")
    }


    componentDidMount() {
        this.getAllMissions()
    }

    render() {

        const {missions} = this.state
        const insertFooter = FooterContent
        return (
            <>
                <div className="container">
                    <div className="wrapper-main">
                        <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Choose Mission</h2>
                        <br/>
                        <div className="story-wrapper">
                            <div className="create-story" id="create-story-wrapper">
                                <CreateMission/>
                            </div>
                            {missions && missions.map((missions, index) => (
                                    <div key={index} className="story-box">
                                        <hr/>
                                        <h4 className="maps-header">{missions.missionName}</h4>
                                        <h5 className="story-text">{missions.shortDescription}</h5>
                                        <h6 className="story-text">{missions.missionDescription}</h6>
                                        <p>
                                            <button className="btn flashy-btn"
                                                    onClick={(e)=>this.showEditMissionWrapper(index)}>
                                                <Icon.Wrench/> Edit This Mission
                                            </button>
                                        </p>
                                        <div className="edit-story-box" id={`ed-box-${index}`}>
                                            <EditMission
                                                missionnId={missions.id}
                                                missionName={missions.missionName}
                                                missionDescription={missions.missionDescription}
                                                />
                                        </div>
                                        <button type="submit" className="btn flashy-btn-delete"  onClick={this.deleteMission.bind(this, missions.id)}>
                                            <Icon.DashCircleFill/> Delete This Mission
                                        </button>
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

export default AdminMission