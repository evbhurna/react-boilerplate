import React, { Component } from "react";
import $ from 'jquery';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {

        };

    }

    toggleMenu(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("#landingNav").toggleClass("toggle");
        $("#page-content-wrapper").toggleClass("toggle");
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg border-bottom shadow bg-white fixed-top" id="landingNav">
                <button type="button" id="menu-toggle" className="navbar-toggle rounded" onClick={this.toggleMenu} >
                    <i className="material-icons" style={{ fontSize: "35px"}}>menu</i>
                </button>
            </nav>
        )
    }
}



export default Navbar;