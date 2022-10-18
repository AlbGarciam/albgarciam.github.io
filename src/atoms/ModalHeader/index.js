import React from "react";
import Theme from "../../theme";

const style = {
    display: "flex",
    flexDirection: "column",
    gap: "1.3rem"
}

const headerStyle = {
    color: Theme.Colors.primary,
    fontFamily: Theme.Fonts.h1,
    fontSize: "5.625rem",
    margin: "0"
}

export default class ModalHeader extends React.Component {
    render() {
        return (
            <div style={{...this.props.style, style}}>
                <h1 style={headerStyle}>{this.props.header}</h1>
                {this.props.children}
            </div>
        );
    }
}