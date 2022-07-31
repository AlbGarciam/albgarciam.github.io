import React from "react";
import Theme from "../../theme";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  maxWidth: "30rem",
};

const titleStyle = {
  fontSize: Theme.Sizes.Typographies.h2,
  fontFamily: Theme.Fonts.h2,
  color: Theme.Colors.primaryText,
  margin: "0",
};

const subtitleStyle = {
  fontSize: Theme.Sizes.Typographies.p,
  fontFamily: Theme.Fonts.p,
  color: Theme.Colors.primaryText,
  margin: "0",
};

export default class SectionTitle extends React.Component {
  render() {
    return (
      <div style={style}>
        <h2 style={titleStyle}>{this.props.title}</h2>
        <p style={subtitleStyle}>{this.props.subtitle}</p>
      </div>
    );
  }
}
