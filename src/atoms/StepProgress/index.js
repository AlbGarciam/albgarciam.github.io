import React from "react";
import Theme from "../../theme";

const style = {
    color: Theme.Colors.primary,
    fontFamily: Theme.Fonts.footers,
    fontSize: "1rem"
}

export default class StepProgress extends React.Component {
    render() {
        return (
            <p style={{ ...this.props.style, ...style }}>{this.props.current + " - " + this.props.total}</p>
        );
    }
}