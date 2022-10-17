import React from "react";
import { CircleButton, ModalHeader, PortfolioButton } from "../../atoms";
import theme from "../../theme";

const style = {
    display: "flex",
    flexDirection: "column",
}

const textStyle = {
    color: theme.Colors.primary,
    fontFamily: theme.Fonts.paragraph,
    fontSize: "1.5rem",
    textAlign: "left",
    margin: "0"
}

export default class ContactModalHeader extends React.Component {
    render() {
        return (
            <ModalHeader header="Contact info">
                <div style={style}>
                    <p style={textStyle}>Alberto García-Muñoz</p>
                    <p style={textStyle}>Spain</p>
                </div>
            </ModalHeader>
        );
    }
}