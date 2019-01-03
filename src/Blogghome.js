import React, { Component } from "react";
import Bloggpost from "./Bloggpost";
import "./styles.css";
import App from "./App";
import * as contentful from "contentful";
import * as contentfulManagement from "contentful-management";
import { Link } from "react-router-dom";
class Blogghome extends Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: "d9vqtdmqtwz9",
    accessToken:
      "67ad3a8e951532259a56e61a20306597ba13ced44cd974055a912dcbd099f94d"
  });

  management = contentfulManagement.createClient({
    accessToken:
      "CFPAT-1844ae186a0c33d1ad1d6f83a3c8af337e7f2ea5d51c05069395cfe4ca39d664"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
    this.createPost();
  }

  fetchPosts = () => this.client.getEntries();
  createPost = () => {
    this.management
      .getSpace("d9vqtdmqtwz9")
      .then(space =>
        space.createEntry("employee", {
          fields: {
            name: {
              "en-US": "Jesperhoes"
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
  setPosts = response => {
    this.setState({
      posts: response.items
    });

    console.log(response.items);
  };

  render() {
    return (
      <div className="blogghome">
        <Link to="/Newpost">New post</Link>
        <div className="post-container">
          {this.state.posts.map(({ fields }, i) => (
            <Bloggpost key={i} {...fields} />
          ))}
        </div>
      </div>
    );
  }
}

export default Blogghome;
