import React from "react";
import Theme from "../../theme";

const style = {
    fontFamily: Theme.Fonts.Family.heading,
    fontWeight: Theme.Fonts.Weight.medium,
    textAlign: "center",
    fontSize: "1.5rem",
    textDecorationColor: Theme.Colors.highlightA,
    padding: "0.5rem 1rem",
    textDecoration: "none",
    textDecoration: "none"
}

export default class PortfolioButton extends React.Component {
    getBaseStyle() {
        return {
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            borderRadius: "50vh",
            borderWidth: "2px",
            borderStyle: "solid"
        } 
    }

    getPrimaryStyle() {
        let baseStyle = this.getBaseStyle()
        if (this.props.mode === "light") {
            return {...baseStyle, ...{
                color: Theme.Colors.textDark,
                textDecorationColor: Theme.Colors.textDark,
                backgroundColor: Theme.Colors.backgroundPrimary,
                borderColor: Theme.Colors.backgroundSecondary
            }}
        }
        return {...baseStyle, ...{
            color: Theme.Colors.textHighlight,
            textDecorationColor: Theme.Colors.textHighlight,
            backgroundColor: Theme.Colors.backgroundSecondary,
            borderColor: Theme.Colors.backgroundSecondary
        }}
    }

    getSecondaryStyle() {
        let baseStyle = this.getBaseStyle()
        if (this.props.mode === "light") {
            return {...baseStyle, ...{
                color: Theme.Colors.textDark,
                textDecorationColor: Theme.Colors.textHighlight,
                backgroundColor: Theme.Colors.backgroundPrimary,
                borderColor: Theme.Colors.backgroundSecondary
            }}
        }
        return {...baseStyle, ...{
            color: Theme.Colors.backgroundSecondary,
            textDecorationColor: Theme.Colors.backgroundSecondary,
            backgroundColor: Theme.Colors.backgroundPrimary,
            borderColor: Theme.Colors.backgroundSecondary
        }}
    }

    getStyle() {
        if (this.props.variant === "secondary") {
            return this.getSecondaryStyle()
        } else {
            return this.getPrimaryStyle()
        }
    }

    render() {
        let boxStyle = this.getStyle()
        return (
            <div style={this.getStyle()}>
                <a style={{ ...this.props.style, ...style, ...{color: boxStyle.textDecorationColor} }}
                    href={this.props.route}>
                    {this.props.text}
                </a>
            </div>
        );
    }
}