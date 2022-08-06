import React from "react";
import { NavigateButton } from "../../atoms";
import Theme from "../../theme";

const internalStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  color: Theme.Colors.primaryText,
  gap: "1rem"
}

const preTitleStyle = {
  margin: "0",
  fontFamily: Theme.Fonts.headingPreTitle,
  fontSize: "2.5rem"
}

const titleStyle = {
  margin: "0",
  fontFamily: Theme.Fonts.headingTitle,
  fontSize: "6.5rem"
}

const subtitleStyle = {
  margin: "0",
  fontFamily: Theme.Fonts.headingSubtitle,
  fontSize: "1.25rem"
}

export default class Heading extends React.Component {
  render() {
    const style = { ...this.props.style, ...internalStyles }
    const { preTitle, title, subtitle, button } = this.props.content
    return (
      <div style={style}>
        <h3 style={preTitleStyle}>{preTitle}</h3>
        <h1 style={titleStyle}>{title}</h1>
        <p style={subtitleStyle}>{subtitle}</p>
        {button != null && <NavigateButton content={button} />}
      </div >
    );
  }
}
