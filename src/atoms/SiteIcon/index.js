import React from "react";
import { navigate } from "gatsby";
import logo from "../../images/site-logo.png";

export default class SiteIcon extends React.Component {
  constructor() {
    super();
    const aspectRatio = 1504 / 64.92;
    const height = 2.5;
    const width = aspectRatio * height;

    this.style = {
      width: width + "rem",
      height: height + "rem",
      objectFit: "contain",
    };
  }

  onIconTapped() {
    navigate("/");
  }

  render() {
    return (
      <img
        style={this.style}
        src={logo}
        alt="AlbGarciam's logo"
        onClick={this.onIconTapped.bind(this)}
      />
    );
  }
}
