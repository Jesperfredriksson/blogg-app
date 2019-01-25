import React, { Component } from "react";
import Navbar from "./Navbar";

class contactme extends Component {
  render() {
    return (
      <div className="blogghome-container">
        <Navbar />
        <div className="blogghome-inner">
          <div className="post-container">
            <h3>Contact</h3>
            <a href="mailto:jesper@saits.se" className="email-link">
              email
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default contactme;
