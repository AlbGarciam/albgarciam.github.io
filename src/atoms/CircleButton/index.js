import React from "react";
import Colors from "../../theme/Colors";
import { navigate } from "gatsby";

const style = {
    display: "flex",
    background: Colors.primary,
    borderRadius: "50%",
    width: "7.5rem",
    height: "7.5rem",
}

const iconStyle = {
    width: "3rem",
    height: "3rem",
    margin: "auto"
}

export default class CircleButton extends React.Component {
    iconTapped() {
        navigate(this.props.route)
    }

    render() {
        return (
            <div style={{...this.props.style, ...style}}
                 onClick={this.iconTapped.bind(this)}>
                <img
                    style={iconStyle}
                    src={this.props.icon}
                />
            </div>
        );
    }
}