import React from "react";
import { navigate } from "gatsby";
import logo from "./mouse.png";

export default class MouseIcon extends React.Component {
  constructor() {
    super();
    const aspectRatio = 29 / 60;
    const height = 2.5;
    const width = aspectRatio * height;

    this.style = {
      width: "auto",
      height: height + "rem",
      objectFit: "contain",
    };
  }

  render() {
    return <img style={this.style} src={logo} alt="mouse scroll" />;
  }
}
