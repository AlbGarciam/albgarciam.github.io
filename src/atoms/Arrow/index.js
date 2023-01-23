import React from "react";
import Theme from "../../theme";
import ArrowDark from "./arrow-dark.svg"
import ArrowGrey from "./arrow-grey.svg"

const style = {
    height: "4rem",
    width: "4rem",
    display: "grid",
	alignItems: "start",
	justifyItems: "center"
}

const imgStyle = {
    gridArea: "1/1/1/1",
    height: "3rem",
    width: "3rem",
    margin: "0.5rem",
    transition: "opacity 0.45s" 
}

const backgroundStyle = {
    gridArea: "1/1/1/1",
    backgroundColor: Theme.Colors.backgroundPrimary,
    width: "100%",
    transition: "height 0.45s" 
}

export default class Arrow extends React.Component {
    onClick() {
        this.props.action()
    }

    render() {
        return (
            <div style={{...this.props.style, ...style}}>
                <div style={{...backgroundStyle, height: this.props.selected ? "100%" : "0"}} />
                <img style={{...imgStyle, opacity: this.props.selected ? "1" : "0"}} src={ArrowDark} />
                <img style={{...imgStyle, opacity: this.props.selected ? "0" : "1"}} src={ArrowGrey} />
            </div>
        );
    }
}