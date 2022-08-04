import React from "react";
import Theme from "../../theme";

const iconStyle = {
  width: "3.75rem",
  height: "3.75rem",
  borderRadius: "0.75rem"
};

const titleStyle = {
  fontSize: "1.5rem",
  fontFamily: Theme.Fonts.h1,
  color: Theme.Colors.primaryText,
  margin: "0rem 1rem",
};

const subtitleStyle = {
  fontSize: "1.25rem",
  fontFamily: Theme.Fonts.p,
  color: Theme.Colors.primaryText,
  margin: "0rem 1rem",
};

export default class ProjectHeader extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.image != null && <img
          style={iconStyle}
          src={this.props.image.src}
          alt={this.props.alt}
        />}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={titleStyle}>{this.props.title}</p>
          <p style={subtitleStyle}>{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
