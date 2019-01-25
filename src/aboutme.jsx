import React, { Component } from "react";
import Navbar from "./Navbar";

class aboutme extends Component {
  render() {
    return (
      <div className="blogghome-container">
        <Navbar />
        <div className="blogghome-inner">
          <div className="post-container">
            <h3>About me</h3>
            <div className="profile-picture">
              <img
                src="https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Profile picture"
              />
            </div>
            <p>
              En oändlig själ som vandrar i en oändlig öken av ovetskap och
              förtvivlan.
            </p>
            <p>
              Okänsligheten skadar oss alla innerst inne, var snäll emot din
              medmänniska för det lönar sig alltid i slutänden att vara en
              förebild.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutme;
