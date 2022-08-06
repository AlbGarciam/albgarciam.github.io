import React from "react";
import { SocialFooter, TwoStateIcon } from "../../atoms";
import Theme from "../../theme";

const internalStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2rem",
  zIndex: 9999
}

const linksContainerStyle = {
  backgroundColor: Theme.Colors.background,
  position: "fixed",
  top: "0", left: "0",
  width: "100%",
  transition: "all .25s ease-in-out",
  zIndex: 9000
}

const linkStyle = {
  fontFamily: Theme.Fonts.navigation,
  color: Theme.Colors.primaryText,
  textDecoration: "none",
  borderBottom: Theme.Colors.primaryText + " 1px solid",
  fontSize: "2.5rem",
}

const linkContainer = {
  flexGrow: "1",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  aspecRatio: "1",
}

const iconStyle = {
  width: "auto",
  height: "2rem",
  zIndex: 9999
}

export default class MobileNavBar extends React.Component {
  state = { height: 0, extended: false };

  componentDidMount() {
    const { innerHeight: height } = window;
    this.setState({ height });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerHeight: height } = window;
    this.setState({ height });
  }

  toggleState() {
    this.setState({ extended: !this.state.extended })
  }

  render() {
    const style = { ...this.props.style, ...internalStyles }
    const fontSize = Math.min(2, 2 * this.state.height / 748) + "rem"
    return (
      <div style={style}>
        <div style={{
          height: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <img style={iconStyle} src="/icon-logo.svg" alt="AlbGarciam's logo" />
          <TwoStateIcon
            style={{ zIndex: 9999 }}
            enabledSrc="/images/close-icon.svg"
            disabledSrc="/images/hamburger.svg"
            active={this.state.extended}
            onClick={this.toggleState.bind(this)} />
        </div>
        <div style={{
          ...linksContainerStyle,
          height: this.state.extended ? "100%" : "0px",
          padding: this.state.extended ? "8rem 2.5rem" : "0px"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            alignItems: "flex-start",
            height: this.state.extended ? null : "0px",
            opacity: this.state.extended ? "1" : "0",
            transition: "all .25s ease-in-out",
          }}>
            <a href="/" style={{ ...linkStyle }}>Home</a>
            <a href="/projects" style={{ ...linkStyle }}>Projects</a>
            <a href="/blog" style={{ ...linkStyle }}>Blog</a>
            <a href="/about" style={{ ...linkStyle }}>About</a>
            <SocialFooter style={{ visibility: this.state.extended ? "visible" : "hidden" }} />
          </div>
        </div>
      </div>
    );
  }
}
