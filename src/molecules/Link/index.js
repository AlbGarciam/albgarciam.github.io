import React from "react";
import { Arrow } from "../../atoms";
import Theme from "../../theme";
import { navigate } from "gatsby";

const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%"
}

const barStyle = {
    backgroundColor: Theme.Colors.backgroundTertiary,
    height: "1px",
    width: "100%",
    margin: "0"
}

const subtitleStyle = {
    color: Theme.Colors.textLight,
    fontFamily: Theme.Fonts.Family.heading,
    fontWeight: Theme.Fonts.Weight.regular,
    fontSize: "3rem",
    textAlign: "left",
    margin: "1rem 0"
}

export default class Link extends React.Component {
    constructor() {
        super();
        this.state = { hover: false };
    }

    onMouseEnter() {
        this.setState({ hover: true });
    }

    onMouseLeave() {
        this.setState({ hover: false });
    }

    onClick() {
        navigate(this.props.route)
    }

    render() {
        return (
            <div 
                style={{ ...this.props.style, ...style }}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                onClick={this.onClick.bind(this)}>
                <div style={barStyle}/>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <p style={subtitleStyle}>{this.props.text}</p>
                    <Arrow selected={this.state.hover} />
                </div>
                <div style={barStyle}/>
            </div>
        );
    }
}