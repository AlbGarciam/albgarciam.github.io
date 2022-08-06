import React from "react";
import { SocialFooter } from "../../atoms";
import Theme from "../../theme";

const internalStyles = {
  width: "7.5rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  gap: "2rem"
}

const linkStyle = {
  fontFamily: Theme.Fonts.navigation,
  color: Theme.Colors.primaryText,
  textDecoration: "none",
  borderBottom: Theme.Colors.primaryText + " 1px solid"
}

const linkContainer = {
  flexGrow: "1",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  aspecRatio: "1",
  transform: "rotate(-90deg)",
}

const iconStyle = {
  width: "7.5rem",
  height: "auto"
}

export default class DesktopNavBar extends React.Component {
  state = { height: 0 };

  componentDidMount() {
    const { innerHeight: height } = window;
    this.setState({ height });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerHeight: height } = window;
    this.setState({ height });
  }

  render() {
    const style = { ...this.props.style, ...internalStyles }
    const fontSize = Math.min(2, 2 * this.state.height / 748) + "rem"
    return (
      <div style={style}>
        <a href="/"><img style={iconStyle} src="/icon-logo.svg" alt="AlbGarciam's logo" /></a>
        <div style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          transform: "translateX(-40%)"
        }}>
          <div style={linkContainer}>
            <a href="/projects" style={{ ...linkStyle, fontSize }}>PROJECTS</a>
          </div>
          <div style={linkContainer}>
            <a href="/blog" style={{ ...linkStyle, fontSize }}>BLOG</a>
          </div>
          <div style={linkContainer}>
            <a href="/about" style={{ ...linkStyle, fontSize }}>ABOUT</a>
          </div>
        </div>
        <SocialFooter />
      </div>
    );
  }
}
