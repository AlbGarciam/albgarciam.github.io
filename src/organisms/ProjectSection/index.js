import React from "react";
import { Heading, TwoToneBackground } from "../../molecules";
import Theme from "../../theme";

const internalStyles = {
  backgroundColor: "clear",
  height: "100vh"
}

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "absolute",
  gap: "2.5rem",
  height: "100%",
  zIndex: "99"
}

export default class ProjectSection extends React.Component {
  state = { width: 0 };

  componentDidMount() {
    const { innerWidth: width } = window;
    this.setState({ width });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  render() {
    const style = { ...this.props.style, ...internalStyles }
    const isMobile = this.state.width <= 768
    const { image, header } = this.props.element
    const maxWidth = isMobile ? null : "60%"
    const margin = isMobile ? "0 2.5rem" : "0rem 2.5rem 0rem 12rem"
    return (
      <div style={style}>
        <TwoToneBackground style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0
        }} image={image} />

        <div style={{ ...containerStyles, maxWidth, margin }}>
          <Heading content={header} />
        </div>
      </div>
    );
  }
}
