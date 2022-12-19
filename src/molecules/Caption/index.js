import React from "react";
import Theme from "../../theme";

const style = {
    display: "flex",
    flexDirection: "column",
}

const titleStyle = {
    color: Theme.Colors.textLight,
    fontFamily: Theme.Fonts.Family.heading,
    fontWeight: Theme.Fonts.Weight.h1,
    fontSize: "4rem",
    textAlign: "left",
    margin: "0",
    maxWidth: "700px"
}

const subtitleStyle = {
    color: Theme.Colors.textLight,
    fontFamily: Theme.Fonts.Family.heading,
    fontWeight: Theme.Fonts.Weight.regular,
    fontSize: "1.2rem",
    textAlign: "left",
    margin: "0",
    maxWidth: "700px"
}

export default class Caption extends React.Component {
    render() {
        return (
            <div style={{ ...this.props.style, ...style }}>
                <h2 style={titleStyle}>{this.props.title}</h2>
                <p style={subtitleStyle}>{this.props.text}</p>
            </div>
        );
    }
}