import * as React from "react";
import { Caption } from "../../molecules";
import theme from "../../theme";

const style = {
  display: "flex",
  maxWidth: "850px",
  margin: "auto"
};

const headerStyle = {
  fontSize: "5.625rem",
  lineHeight: "4.875rem",
  fontFamily: theme.Fonts.h1,
  color: theme.Colors.primary,
  flex: 1,
  margin: 0
}

export default class Superheading extends React.Component {
  getDefaultDOM() {
    const containerStyle = {
      ...this.props.style, 
      ...style, 
      flexDirection: "column",
      width: "100%",
      gap: "2rem"
    }
    return (
      <div style={containerStyle}>
        <h1 style={{...headerStyle, width: "50%"}} >{this.props.headerText}</h1>
        <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
          <Caption style={{width: "50%"}} text={this.props.text} route={this.props.route} button={this.props.button} />
        </div>
      </div>
    )
  }

  getFullTitleDOM() {
    const containerStyle = {
      ...this.props.style, 
      ...style, 
      flexDirection: "column"
    }
    return (
      <div style={containerStyle}>
        <h1 style={headerStyle} >{this.props.headerText}</h1>
        <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
          <Caption style={{width: "50%"}} text={this.props.text} route={this.props.route} button={this.props.button} />
        </div>
      </div>
    )
  }

  getInvertedDOM() {
    const containerStyle = {
      ...this.props.style, 
      ...style, 
      flexDirection: "column-reverse",
      gap: "2rem"
    }
    return (
      <div style={containerStyle}>
        <h1 style={{...headerStyle, width: "50%"}} >{this.props.headerText}</h1>
        <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
          <Caption style={{width: "50%"}} text={this.props.text} route={this.props.route} button={this.props.button} />
        </div>
      </div>
    )
  }

  render() {
    const { variant } = this.props
    if (variant === "full-title") {
      return this.getFullTitleDOM()
    } else if (variant === "inverted") {
      return this.getInvertedDOM()
    }
    return this.getDefaultDOM()
  }
}
