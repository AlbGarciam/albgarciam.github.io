import React from "react";
import Theme from "../../theme";

const internalStyles = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  textDecoration: "none",
  whiteSpace: "nowrap"
}

const textStyle = {
  fontSize: "1.25rem",
  fontFamily: Theme.Fonts.p,
  color: Theme.Colors.primaryText
}

const arrowStyle = {
  height: "1.25rem",
  width: "auto",
  transition: "all .25s ease-in-out",
}

export default class NavigateButton extends React.Component {
  state = { hover: false };

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  onClick() {
    this.props.onClick();
  }


  render() {
    const style = { ...this.props.style, ...internalStyles }
    const { text, link } = this.props.content
    const { hover } = this.state
    return (
      <a
        style={style} href={link}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}>
        <p style={textStyle}>{text}</p>
        <img style={{ ...arrowStyle, transform: hover ? "none" : "scaleX(0.8)" }} src="/images/arrow-left.svg" />
      </a>
    );
  }
}