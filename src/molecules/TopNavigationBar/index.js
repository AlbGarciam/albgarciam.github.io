import React from "react";
import { BarNavigationItem} from "../../atoms";
import { navigate } from "gatsby";
import logo from "./logo.svg";

const style = {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: "1.5rem",
    justifyContent: "center"
}

const containerStyle = {
    width: "100%",
    maxWidth: "min(100% - 2rem, 1920px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem"
}

const iconStyle = {
    width: "auto",
    height: "2.625rem",
}

export default class TopNavigationBar extends React.Component {
    onClick() {
        navigate("/")
    }

    render() {
        return (
            <div style={{...this.props.style, ...style}}>
                <div style={containerStyle}>
                    <img 
                        style={{...iconStyle}}
                        src={logo}
                        alt="logo"
                        onClick={this.onClick.bind(this)}
                    />
                    <div style={{flex: 1}} />
                    <BarNavigationItem style={{flex: 1}} action={"/blog"} text="BLOG" />
                    <BarNavigationItem style={{flex: 1}} action={"/projects"} text="PROJECTS" />
                    <BarNavigationItem style={{flex: 1}} action={"/contact"} text="LET'S TALK" />
                </div>
            </div>
        );
    }
}