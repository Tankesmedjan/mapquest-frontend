import React, {Component} from "react";
import {isAdminAuth} from "../repositories/LoginAuth";
import FooterContent from "./FooterContent";
import http from "../http-common";
import * as Icon from "react-bootstrap-icons";
import sha256 from "sha256";


export class AdminAddUser extends Component {
    constructor() {
        super();
        this.state = {
            username: '', password: ''
        }
    }

    handleInputChange = (event) =>
        this.setState({[event.target.name]: event.target.value})

    addAdmin(e) {
        e.preventDefault()

        let data = {
            username: this.state.username,
            password: sha256(this.state.password)
        }
        http.post(`/admin`, data)
        alert("Successfully added new admin!")
    }

    showCreateAdminWrapper() {
        if (document.getElementById("create-admin-wrapper")) {
            document.getElementById("create-admin-wrapper").style.display = "block"
        }
    }

    render() {
        if (isAdminAuth()) return null;
        return (
            <div className="container">
                <div className="wrapper-main">
                    <h2 className="maps-header" style={{color: '#61dafb', marginBottom: '-10px'}}>Admin Dashboard</h2>
                    <br/>
                    <p>
                        <button onClick={this.showCreateAdminWrapper} className="btn flashy-btn">
                            <Icon.Plus/> Add New Admin
                        </button>
                    </p>
                    <div className="create-admin" id="create-admin-wrapper">
                        <form onSubmit={(e) => this.addAdmin(e)}>
                            {}
                            <input type="text" placeholder="Enter username" className="input-text" name="username" onChange={this.handleInputChange}/>
                            <input type="text" placeholder="Enter password" className="input-text" name="password" onChange={this.handleInputChange}/>
                            <button type="submit" className="btn "><Icon.PlusCircleFill/> Add Admin</button>
                        </form>
                    </div>
                </div>
                <FooterContent/>
            </div>
        )
    }
}
export default AdminAddUser