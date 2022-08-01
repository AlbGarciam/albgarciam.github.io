import React from "react";
import Theme from "../../theme";

const tagLineContainerStyle = {
  gridArea: "1/1/1/1",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  margin: "0",
};

const rightTextContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "1rem",
};

export default class Tagline extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentDidMount() {
    const { innerWidth: width } = window;
    this.setState({ width });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  leftTextStyle() {
    const { width } = this.state;
    return {
      color: Theme.Colors.primaryText,
      fontSize: width > 768 ? Theme.Sizes.Typographies.h1 : "3rem",
      margin: "0",
      fontFamily: Theme.Fonts.h1,
    };
  }

  rightTextTopStyle() {
    const { width } = this.state;
    return {
      color: Theme.Colors.accent,
      fontSize: width > 768 ? Theme.Sizes.Typographies.h1 : "3rem",
      margin: "0",
      fontFamily: Theme.Fonts.h1,
    };
  }
  rightTextBottomStyle() {
    const { width } = this.state;
    return {
      color: Theme.Colors.accent,
      fontSize: width > 768 ? Theme.Sizes.Typographies.h1 : "3rem",
      margin: "0",
      marginTop: width > 768 ? "-3rem" : "-1.25rem",
      fontFamily: Theme.Fonts.h1,
    };
  }

  render() {
    return (
      <div style={tagLineContainerStyle}>
        <h1 style={this.leftTextStyle()}>The way I</h1>
        <div style={rightTextContainerStyle}>
          <h1 style={this.rightTextTopStyle()}>code</h1>
          <h1 style={this.rightTextBottomStyle()}>work</h1>
        </div>
      </div>
    );
  }
}
