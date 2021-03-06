import React, { Component } from "react";
import { Link } from "react-router-dom";

class Bloggpost extends Component {
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
    const { isActive } = this.state;
    return (
      <div
        className="post"
        onClick={this.handleClick}
        style={{ height: isActive && 130 + "px" }}
      >
        <div className="post-header">{this.props.title}</div>
        <div className="post-spacer" />
        {/*<div onClick={this.remove}>
          <p>delete</p>
    </div>*/}
        <div
          className="post-content"
          style={{ display: this.state.isActive ? "flex" : "none" }}
        >
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </div>
        {isActive && (
          <div className="dimmer">
            <Link to={`posts/${this.props.id}`} className="read-more">
              Read more
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Bloggpost;
