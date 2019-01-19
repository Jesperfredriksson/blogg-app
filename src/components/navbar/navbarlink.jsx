import React from "react";
import { Link } from "react-router-dom"
class NavBarLink extends React.Component {
    render() {
        return (
            <Link to={this.props.to} className="link-style">{this.props.children}</Link>
        )
    }
}

export default NavBarLink;