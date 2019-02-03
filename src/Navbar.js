import React, { Component } from "react";
import NavBarLink from "./components/navbar/navbarlink";

class Navbar extends Component {
  handleHejClick = () => {
    alert("hej");
  };

  handleHoppClick = () => {
    alert("hopp");
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="btn-container">
          <NavBarLink class="nav-item" to="/newpost">
            New post
          </NavBarLink>
          <NavBarLink className="nav-item" to="/about">
            About me
          </NavBarLink>
          <NavBarLink className="nav-item" to="/contact">
            Contact
          </NavBarLink>
        </div>
        <NavBarLink className="nav-item" to="/">
          Home
        </NavBarLink>
      </div>
    );
  }
}
export default Navbar;
