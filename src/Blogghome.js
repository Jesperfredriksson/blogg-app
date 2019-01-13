import React, { Component } from "react";
import Bloggpost from "./Bloggpost";
import "./styles.css";
import * as contentful from "contentful";
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

  /*client = contentful.getAssets({
    space: "d9vqtdmqtwz9",
    accessToken:
      "67ad3a8e951532259a56e61a20306597ba13ced44cd974055a912dcbd099f94d"
  })*/

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();
 
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
