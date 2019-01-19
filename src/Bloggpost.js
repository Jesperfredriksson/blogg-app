import React, { Component } from "react";


class Bloggpost extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log("klickad");
  };

  render() {
    const { isActive } = this.state
    return (
      <div className="post" onClick={this.handleClick} style={{ height: isActive && 130 + "px"}}>
        {/*<div className="post-img" />
        <img src={this.props.heroImage} alt="Postbild" />*/}
        <div className="post-header">{this.props.title}</div>
        {/*<div className="post-description">{this.props.description}</div>*/}
        <div className="post-spacer"/>
        <div
          className="post-content"
          style={{ display: this.state.isActive ? "flex" : "none" }}
        >
          <div dangerouslySetInnerHTML={{__html: this.props.body}} />
          
        </div>
        {isActive && (
      <div className="dimmer"/>
        )}
      </div>
    );
  }
}

export default Bloggpost;
