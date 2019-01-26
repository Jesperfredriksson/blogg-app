import React, { Component } from "react";
import Navbar from "../Navbar";

class PostShow extends Component {
  state = {
    post: {}
  };

  componentDidMount = () => {
    this.getPost(this.props.match.params.id);
  };
  getPost = async id => {
    const response = await fetch(
      `https://dry-mountain-90515.herokuapp.com/posts/${id}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({ post: data });
  };

  render() {
    const { post } = this.state;
    return (
      <div className="blogghome-container">
        <Navbar />
        <div className="blogghome-inner" />
        <div className="post-container">
          <div>
            <h2>{post.title}</h2>
          </div>
          <div className="post-body-wrapper">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow;
