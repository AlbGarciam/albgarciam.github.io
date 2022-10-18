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
            <ModalHeader header={this.props.title}>
                <div style={style}>
                    {this.props.descriptions.map(item => {
                        return <p style={textStyle}>{item}</p>
                    })}
                </div>
            </ModalHeader>
        );
    }
}