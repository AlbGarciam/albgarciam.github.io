import React from "react";
import Theme from "../../theme";

const tagLineContainerStyle = {
  gridArea: "1/1/1/1",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  margin: "0",
};
const leftTextStyle = {
  color: Theme.Colors.primaryText,
  fontSize: Theme.Sizes.Typographies.h1,
  margin: "0",
  fontFamily: Theme.Fonts.h1,
};
const rightTextContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "1rem",
};
const rightTextTopStyle = {
  color: Theme.Colors.accent,
  fontSize: Theme.Sizes.Typographies.h1,
  margin: "0",
  fontFamily: Theme.Fonts.h1,
};
const rightTextBottomStyle = {
  color: Theme.Colors.accent,
  fontSize: Theme.Sizes.Typographies.h1,
  margin: "0",
  marginTop: "-3rem",
  fontFamily: Theme.Fonts.h1,
};

export default class Tagline extends React.Component {
  render() {
    return (
      <div style={tagLineContainerStyle}>
        <h1 style={leftTextStyle}>The way I</h1>
        <div style={rightTextContainerStyle}>
          <h1 style={rightTextTopStyle}>code</h1>
          <h1 style={rightTextBottomStyle}>work</h1>
        </div>
      </div>
    );
  }
}
