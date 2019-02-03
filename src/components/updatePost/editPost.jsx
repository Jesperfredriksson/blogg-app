import React, { Component } from "react";
import Navbar from "../../Navbar";
import Editor from "../../Editor";

class editPost extends Component {
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

  handeClick = () => {
    //this.createPost();
    this.createNewPost();
  };

  createNewPost = async () => {
    console.log("new post yay");
    const post = {
      post: {
        title: this.state.title,
        body: this.state.content
      }
    };

    await fetch("https://dry-mountain-90515.herokuapp.com/posts", {
      method: "",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...post })
    });
    this.props.history.push("/");
  };

  render() {
    console.log(this.state.post);
    return (
      <div className="blogghome-container">
        <div>
          <Navbar />
          <div className="blogghome-inner" />
          <div className="post-container">
            <h2>Update post</h2>
          </div>
          <Editor content={this.state.post.body} />
        </div>
        <button onClick={this.createNewPost}>Update post</button>
      </div>
    );
  }
}

export default editPost;
