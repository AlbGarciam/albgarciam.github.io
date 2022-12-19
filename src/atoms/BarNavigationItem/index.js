import React from "react";
import Theme from "../../theme";

const style = {
    fontFamily: Theme.Fonts.Family.navigation,
    fontWeight: Theme.Fonts.Weight.navigationLink,
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
                <a style={{ ...this.props.style, ...style, ...{
                    color: (this.props.fluor != null) ? Theme.Colors.textHighlight : Theme.Colors.textDark
                }}}
                    href="#"
                    onClick={this.onClick.bind(this)}>
                    {this.props.text}
                </a>
            </div>
        );
    }
}