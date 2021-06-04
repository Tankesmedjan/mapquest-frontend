import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import http from "../http-common";


export class EditStory extends Component {

    constructor(props) {
        super(props);
        this.state = {storyName: '', storyText: '', storyId: this.props.storyyId};
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    editStory(e) {
        e.preventDefault()
            let data = {storyName: this.state.storyName, storyText: this.state.storyText}
            http.put(`/story/edit?id=${this.state.storyId}`, data)
            alert("Successfully registered!")

    }

    render() {
        return (
            <>

                <form onSubmit={(e) => this.editStory(e)}>
                    {}
                    <input type="text" placeholder="Enter Story Name" className="input-text" name="storyName" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Enter The Story" className="input-text" name="storyText" onChange={this.handleInputChange}/>
                    <button type="submit" className="btn "><Icon.PlusCircleFill /> Edit Story</button>
                </form>
                <hr/>
            </>
        )
    }
}
export default EditStory