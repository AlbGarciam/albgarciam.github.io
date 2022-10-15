import React from "react";
import { BarNavigationItem} from "../../atoms";
import { navigate } from "gatsby";
import logo from "./logo.svg";

const style = {
    display: "flex",
    flexDirection: "row",
    padding: "0 2.625rem",
    alignItems: "center"
}

const iconStyle = {
    width: "auto",
    height: "2rem",
}

export default class TopNavigationBar extends React.Component {
    onClick() {
        navigate("/")
    }

    render() {
        return (
            <div style={{...this.props.style, ...style}}>
                <img 
                    style={{...iconStyle}}
                    src={logo}
                    alt="logo"
                    onClick={this.onClick.bind(this)}
                />
                <div style={{flex: 1}} />
                <BarNavigationItem style={{flex: 1}} route="/about" text="About" />
            </div>
        );
    }
}