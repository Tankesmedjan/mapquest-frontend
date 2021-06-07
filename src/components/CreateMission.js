import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";

export class CreateMission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            missionName: '', missionDescription: '', shortDescription: '',
            winnerScore: '', izQuestion: '', answer1: '', answerX: '', answer2: '',
            question: '', correctAnswer: '', storyId: this.props.storyId
        };
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addMission(e) {
        e.preventDefault()
        let str2bool = (value) => {
            if(value && typeof value === "string") {
                if(value.toLowerCase() === "1") return true;
                if(value.toLowerCase() === "0") return false;
            }
        }
            let data = {
                missionName: this.state.missionName,
                missionDescription: this.state.missionDescription,
                shortDescription: this.state.shortDescription,
                winnerScore: this.state.winnerScore,
                izQuestion: str2bool(this.state.izQuestion),

                answer1: this.state.answer1,
                answerX: this.state.answerX,
                answer2: this.state.answer2,
                question: this.state.question,
                correctAnswer: this.state.correctAnswer,
                storyId: this.props.storyId
            }
            http.post(`/mission`, data)
            alert("Mission Successfully registered!")
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.addMission(e)}>
                    {}
                    <input type="text" placeholder="Enter Mission Name" className="input-text" name="missionName" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Full Description" className="input-text" name="missionDescription" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Short Description" className="input-text" name="shortDescription" onChange={this.handleInputChange}/>
                    <input type="number" placeholder="Enter Winner Score" className="input-text" name="winnerScore" onChange={this.handleInputChange}/>
                    <input type="tinyInt" placeholder="Enter Is Question" className="input-text" name="izQuestion" onChange={this.handleInputChange} min="0" max="1"/>
                    <input type="text" placeholder="Enter Question" className="input-text" name="question" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Answer 1" className="input-text" name="answer1" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Answer X" className="input-text" name="answerX" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Answer 2" className="input-text" name="answer2" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter Correct Answer" className="input-text" name="correctAnswer" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill/> Add Mission</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default CreateMission