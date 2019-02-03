import React, { Component } from "react";
import { Link } from "react-router-dom";

class BloggpostBig extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log("klickad");
  };

  handleRemove = () => {
    fetch(`https://dry-mountain-90515.herokuapp.com/posts/${this.props.id}`, {
      method: "DELETE"
    });
  };

  render() {
    return (
      <div className="post-big">
        <div className="post-header-big">{this.props.title}</div>
        <div className="post-spacer" />
        {/*<div onClick={this.remove}>
          <p>delete</p>
    </div>*/}
        <div className="post-content-big">
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </div>
      </div>
    );
  }
}

export default BloggpostBig;
