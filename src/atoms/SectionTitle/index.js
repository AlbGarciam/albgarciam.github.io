import React from "react";
import Theme from "../../theme";

const style = (opacity) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    maxWidth: "30rem",
    gridArea: "1/1/1/1",
    opacity,
  };
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
      <div style={style(this.props.opacity)} ref={this.props.innerRef}>
        <h2 style={titleStyle}>{this.props.title}</h2>
        <p style={subtitleStyle}>{this.props.subtitle}</p>
      </div>
    );
  }
}
