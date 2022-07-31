import React from "react";
import { SiteIcon } from "../../atoms";
import Theme from "../../theme";

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div style={navBarStyle}>
        <div style={navBarAlignStyle}>
          <SiteIcon />
          <div style={bottomLineStyle} />
        </div>
      </div>
    );
  }
}
