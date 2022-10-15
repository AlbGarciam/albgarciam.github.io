import React from "react";
import arrowUp from "./arrow-up.svg";
import arrowDown from "./arrow-down.svg";
import Colors from "../../theme/Colors";

const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    alignItems: "center"
}
const iconStyle = {
    width: "20px",
    height: "20px",
    padding: "12px",
    transition: "0.25s",
}
const separatorStyle = {
    width: "1px",
    height: "50%",
    backgroundColor: Colors.separator,
    borderRadius: "1px",
    opacity: 0.5
}

export default class StepToggle extends React.Component {
    constructor() {
        super();
        this.state = { leftHover: false, rightHover: false };
    }

    onMouseEnterLeft() {
        this.setState({ leftHover: true });
    }

    onMouseLeaveLeft() {
        this.setState({ leftHover: false });
    }

    onMouseEnterRight() {
        this.setState({ rightHover: true });
    }

    onMouseLeaveRight() {
        this.setState({ rightHover: false });
    }

    downIconTapped() {
        this.props.downAction()
    }

    upIconTapped() {
        this.props.upAction()
    }

    render() {
        const { leftHover, rightHover } = this.state
        return (
            <div style={{...this.props.style, ...containerStyle}}>
                <img
                    style={{...iconStyle, opacity: leftHover ? 1 : 0.5}}
                    src={arrowUp}
                    alt="arrow up"
                    onMouseEnter={this.onMouseEnterLeft.bind(this)}
                    onMouseLeave={this.onMouseLeaveLeft.bind(this)}
                    onClick={this.upIconTapped.bind(this)}
                />
                <div style={separatorStyle} />
                <img
                    style={{...iconStyle, opacity: rightHover ? 1 : 0.5}}
                    src={arrowDown}
                    alt="arrow down"
                    onMouseEnter={this.onMouseEnterRight.bind(this)}
                    onMouseLeave={this.onMouseLeaveRight.bind(this)}
                    onClick={this.downIconTapped.bind(this)}
                />
            </div>
        );
    }
}