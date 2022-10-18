import React from "react";
import Theme from "../../theme";
import { navigate } from "gatsby";

const style = {
    color: Theme.Colors.primary,
    fontFamily: Theme.Fonts.footers,
    fontSize: "1rem",
    textAlign: "right",
    textDecoration: "none"
}

export default class BarNavigationItem extends React.Component {
    onClick() {
        this.props.action()
    }

    render() {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <a style={{ ...this.props.style, ...style }}
                    href="#"
                    onClick={this.onClick.bind(this)}>
                    {this.props.text}
                </a>
            </div>
        );
    }
}