import React, { Component } from "react";
import "./styles.css";
import * as contentfulManagement from "contentful-management";
import CKEditor from "./CKeditor";

class Newpost extends Component {
  management = contentfulManagement.createClient({
    accessToken:
      "CFPAT-1844ae186a0c33d1ad1d6f83a3c8af337e7f2ea5d51c05069395cfe4ca39d664"
  });

  componentDidMount() {
    this.createPost();
  }

  createPost = () => {
    this.management
      .getSpace("d9vqtdmqtwz9")
      .then(space =>
        space.createEntry("employee", {
          fields: {
            name: {
              "sv-SE": "Jesperhoes"
            }
          }
        })
      )
      .then(entry => console.log(entry))
      .catch(console.error);
  };

  handeClick = () => {
    this.createPost();
  };

  render() {
    return (
      <div>
        <CKEditor />
        <h2>Ny post</h2>
      </div>
    );
  }
}

export default Newpost;
