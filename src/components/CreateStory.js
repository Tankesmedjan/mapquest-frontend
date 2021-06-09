import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";

export class CreateStory extends Component {

    constructor() {
        super();
        this.state = {storyName: '', storyText: ''};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addStory(e) {
        e.preventDefault()

        if (!this.state.storyName || this.state.storyName.length <=3){
            alert("Story Name must contain at least 4 letters")
        } else {
            let data = {storyName: this.state.storyName, storyText: this.state.storyText}
            http.post(`/story`, data)
            alert("Successfully registered!")
        }
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.addStory(e)}>
                    {}
                    <input type="text" placeholder="Enter Story Name" className="input-text" name="storyName" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter The Story" className="input-text" name="storyText" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill /> Add Story</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default CreateStory
