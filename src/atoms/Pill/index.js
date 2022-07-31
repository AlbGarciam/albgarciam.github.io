import React from "react";
import Theme from "../../theme";

const backgroundStyle = {
  backgroundColor: Theme.Colors.invertedBackground,
  borderRadius: "2rem",
};

const textStyle = {
  fontSize: Theme.Sizes.Typographies.pills,
  fontFamily: Theme.Fonts.pills,
  color: Theme.Colors.invertedPrimaryText,
  margin: "0.5rem 1.75rem",
};

export default class Pill extends React.Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <p style={textStyle}>{this.props.text}</p>
      </div>
    );
  }
}
