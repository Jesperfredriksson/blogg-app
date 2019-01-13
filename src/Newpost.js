import React, { Component } from "react";
import "./styles.css";
import * as contentfulManagement from "contentful-management";
import Editor from "./Editor"
import { Link, withRouter } from "react-router-dom";

class Newpost extends Component {
  state = { 
    content: 'Skriv här',
    title: "Titel"
}
  
  onChange = (evt) => {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
  }

  onTitleChange = event => {
    console.log("onChange fired with event info: ", event);
    this.setState({
      title: event.target.value
    })
  }

  onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
  }
  
  afterPaste = (evt) => {
    console.log("afterPaste event called with event info: ", evt);
  }
  
  management = contentfulManagement.createClient({
    accessToken:
      "CFPAT-2f9045d81d744fa4587a27744815c20fa55906325ed56471a20cd2c4493d2807"
  });

  createPost = event => {
    event.preventDefault()
    this.management
      .getSpace("d9vqtdmqtwz9")
      .then(space =>
        space.createEntry("blogPost", {
          fields: {
            body: { 
             "sv-SE": this.state.content
            },
              title: {
            "sv-SE": this.state.title

            }
          }
        })
        )
      .then((entry) => entry.publish())
      .then(entry => console.log(entry))
      .catch(console.error);

      this.props.history.push("/")
  };

  handeClick = () => {
    this.createPost();
  };

  render() {
 
    return (
      <div>
        <h2>Ny post</h2>
        <h3>Titel</h3>
        <input 
        onChange={this.onTitleChange}
        value={this.state.title}
        />
        {this.state.title}
        <div>
        <h3>Innehåll</h3>
        <Editor
          content={this.state.content}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onAfterPaste={this.afterPaste}
        />
        </div>
        <button onClick={this.createPost}>Skicka</button>

      </div>
    );
  }
}

export default withRouter(Newpost);
