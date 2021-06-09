import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";
import {isAuthenticated} from "../repositories/LoginAuth";

export class EditStory extends Component {

    constructor(props) {
        super(props);
        this.state = {storyName: '', storyText: '', storyId: this.props.storyyId,
        };
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    editStory(e) {
        e.preventDefault()
            let data = {storyName: this.state.storyName, storyText: this.state.storyText}
            http.put(`/story/edit?id=${this.state.storyId}`, data)
            alert("Successfully updated this Story!")

    }

    render() {
        if (!isAuthenticated()) return null;
        return (
            <>
                <form onSubmit={(e) => this.editStory(e)}>
                    {}
                    <input type="text" placeholder="Enter Story Name" className="input-text" name="storyName" onChange={this.handleInputChange}/>
                    <textarea placeholder="Enter The Story" className="input-text" name="storyText" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill /> Edit Story</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default EditStory