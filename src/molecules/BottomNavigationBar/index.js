import React from "react";
import { BarNavigationItem} from "../../atoms";
import { navigate } from "gatsby";
import logo from "./logo.svg";

const style = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3rem"
}

const containerStyle = {
    width: "100%",
    maxWidth: "min(100% - 2rem, 1920px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem"
}

const iconStyle = {
    width: "auto",
    height: "2.625rem",
}

export default class BottomNavigationBar extends React.Component {
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
                <div style={containerStyle}>
                    <BarNavigationItem style={{flex: 1}} fluor action={"/terms"} text="TERMS & CONDITIONS" />
                    <BarNavigationItem style={{flex: 1}} fluor action={"/"} text="© ALL RIGHTS RESERVED" />
                    <BarNavigationItem style={{flex: 1}} fluor action={"/terms"} text="PRIVACY POLICY" />
                </div>
            </div>
        );
    }
}