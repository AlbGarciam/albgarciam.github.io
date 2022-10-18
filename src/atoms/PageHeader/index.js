import React from "react";
import Theme from "../../theme";

const style = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
}

const headerStyle = {
    color: Theme.Colors.primary,
    fontFamily: Theme.Fonts.h1,
    fontSize: "5.625rem",
    margin: "0"
}

const subheaderStyle = {
    color: Theme.Colors.primary,
    fontFamily: Theme.Fonts.paragraph,
    fontSize: "1.45rem",
    margin: "0"
}

export default class PageHeader extends React.Component {
    render() {
        return (
            <div style={{...this.props.style, style}}>
                <p style={subheaderStyle}>{this.props.subheader}</p>
                <h1 style={headerStyle}>{this.props.header}</h1>
            </div>
        );
    }
}