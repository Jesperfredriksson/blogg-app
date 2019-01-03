import React, { Component } from "react";
import "./styles.css";

class Bloggpost extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log("klickad");
  };

  render() {
    return (
      <div className="post" onClick={this.handleClick}>
        <div className="post-img" />
        <img src={this.props.heroImage} alt="Postbild" />
        <div className="post-header">{this.props.title}</div>
        <div className="post-description">{this.props.description}</div>
        <div
          className="post-content"
          style={{ display: this.state.isActive ? "flex" : "none" }}
        >
          <p>{this.props.body}</p>
          {this.props.publishDate}
        </div>
      </div>
    );
  }
}

export default Bloggpost;
