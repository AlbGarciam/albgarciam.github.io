import * as React from "react";
import { DynamicNavBar } from "../organisms"
import { TwoToneBackground, Heading } from "../molecules";
import landing from "../json/about-demo.json"
import Theme from "../theme";

const mainStyles = {
  position: "absolute",
  top: "0", left: "0", right: "0", bottom: "0",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};

const backgroundStyle = {
  position: "fixed",
  top: "0", left: "0", right: "0", bottom: "0",
  zIndex: "0"
}

const containerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "2.5rem",
  margin: "2.5rem 2.5rem 2.5rem 12rem",
  height: "100%",
  zIndex: "99999"
}

export default class AboutPage extends React.Component {
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
    const isMobile = this.state.width < 768
    const maxWidth = this.state.width > 768 ? "60%" : null
    return (
      <main style={mainStyles}>
        <TwoToneBackground style={backgroundStyle} image="/images/thunder.svg" />

        {!isMobile && <DynamicNavBar style={{ padding: "2.5vh 2.5rem", position: "fixed", top: 0, left: 0 }} />}
        {!isMobile && <div style={{ ...containerStyles, maxWidth }}>
          <Heading content={landing.header} />
        </div>}

        {isMobile && <DynamicNavBar style={{ margin: "2.5rem" }} />}
        {isMobile && <Heading style={{ margin: "auto 2.5rem", zIndex: 99 }} content={landing.header} />}
      </main>
    );
  }
}
