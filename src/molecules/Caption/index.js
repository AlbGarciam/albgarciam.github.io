import React from "react";
import { PortfolioButton } from "../../atoms";
import theme from "../../theme";

const style = {
    display: "flex",
    flexDirection: "column",
}

const captionStyle = {
    color: theme.Colors.primary,
    fontFamily: theme.Fonts.paragraph,
    fontSize: "1rem",
    textAlign: "right"
}

export default class Caption extends React.Component {
    render() {
        return (
            <div style={{ ...this.props.style, ...style }}>
                <p style={captionStyle}>{this.props.text}</p>
                <PortfolioButton route={this.props.route} text={this.props.button} />
            </div>
        );
    }
}