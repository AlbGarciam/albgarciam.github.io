import React from "react";
import { navigate } from "gatsby";
import logo from "./site-logo.png";

const style = {
  width: "auto",
  height: "2.5rem",
  objectFit: "contain",
};

export default class SiteIcon extends React.Component {
  onIconTapped() {
    navigate("/");
  }

  render() {
    return (
      <img
        style={style}
        src={logo}
        alt="AlbGarciam's logo"
        onClick={this.onIconTapped.bind(this)}
      />
    );
  }
}
