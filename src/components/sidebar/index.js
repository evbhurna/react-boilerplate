import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APPNAME } from "../../settings";

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
        };  
    }

    componentDidMount() {
        document.getElementById('inv').classList.remove('show')
    }

    render() {
        return (
            <div className="border-right text-white bg-dark" id="sidebar-wrapper" style={{position: "fixed"}}>
                <div className="sidebar-heading list-group-item-action sidebar-group bg-dark">
                    <b className="text-white">{APPNAME}</b>
                </div>
                <div className="list-group list-group-flush" style={{overflowY:"scroll", height:"80vh"}}>
                    <div>
                        <div className="sidebar-group">
                            <Link to="/" className="list-group-item list-group-item-action text-white sidebar-group bg-dark">
                                <i className="material-icons pr-2">home</i>
                                <b>Home</b>
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-dark" data-toggle="collapse" data-target="#inv">
                                <i className="material-icons pr-2">store</i>
                                <b className="list-group-name">Profile</b>
                                <i className="material-icons float-right">arrow_drop_down</i>
                            </Link>
                            <div id="inv" className="collapse">
                                <NavLink to={"/my-profile"} className="list-group-item list-group-item-action px-5 bg-dark" activeClassName="selected">My Profile</NavLink>
                                <NavLink to={"/change-password"} className="list-group-item list-group-item-action px-5 bg-dark" activeClassName="selected">Change Password</NavLink>
                            </div>
                        </div>
                    </div>
                    <Link to="/signout" className=" list-group-item-action sidebar-group px-3 py-3 bg-dark">
                        <i className="material-icons pr-2">exit_to_app</i>
                        <b>Logout</b>
                    </Link>
                </div>
            </div>
        )
    }
}