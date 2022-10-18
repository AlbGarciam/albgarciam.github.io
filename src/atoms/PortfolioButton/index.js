import React from "react";
import Theme from "../../theme";

const style = {
    color: Theme.Colors.primary,
    fontFamily: Theme.Fonts.button,
    fontSize: "1.4rem",
    textAlign: "right",
    textDecorationColor: Theme.Colors.highlightA
}

export default class PortfolioButton extends React.Component {
    render() {
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "right"}}>
                <a style={{ ...this.props.style, ...style }}
                    href={this.props.route}>
                    {this.props.text}
                </a>
            </div>
        );
    }
}