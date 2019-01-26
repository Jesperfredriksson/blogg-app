import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <div>
            <button className="button" onClick={this.props.onClick}>
            {this.props.text}
            </button>
            </div>
        )
    }
}

export default Button;