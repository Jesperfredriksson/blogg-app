import React, { Component } from "react";
import NavBarLink from "./components/navbar/navbarlink";



class Navbar extends Component {
    handleHejClick = () => {
        alert("hej")
    }

    handleHoppClick = () => {
        alert("hopp")
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-spacer"/>
                <div className="btn-container">
                <NavBarLink to="/newpost">New post</NavBarLink>
                <div className="navbar-spacer2" />
                <NavBarLink to="/about">About me</NavBarLink>
                <div className="navbar-spacer2" />
                <NavBarLink to="/contact">Contact</NavBarLink>
            </div>
            </div>
        );
    };
}
export default Navbar 