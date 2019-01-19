import React, { Component } from "react";
import Bloggpost from "./Bloggpost";
import * as contentful from "contentful";
import Navbar from "./Navbar"


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
    //this.fetchPosts().then(this.setPosts);
    this.fetchNewPosts()
  }

  fetchPosts = () => this.client.getEntries();
  fetchNewPosts = async () => {
    const response = await fetch("https://dry-mountain-90515.herokuapp.com/posts")
    const data = await response.json()
    console.log("jonas data", data)
    this.setState({posts: data}) 
  }
 
  setPosts = response => {
    this.setState({
      posts: response.items
    });

    console.log(response.items);
  };

  render() {
    return (
      <div className="blogghome-container">
      <Navbar />
      <div className="blogghome-inner">
        
        <div className="post-container">
          {this.state.posts.reverse().map(post => (
            <Bloggpost key={post.id} {...post} />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Blogghome;
