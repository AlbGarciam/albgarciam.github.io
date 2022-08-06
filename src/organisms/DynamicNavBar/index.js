import React from "react";
import { DesktopNavBar, MobileNavBar } from "../../molecules";
import Theme from "../../theme";

const internalStyles = {
  backgroundColor: "clear",
  height: "95vh"
}

export default class DynamicNavBar extends React.Component {
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
    const isMobile = this.state.width <= 768
    let style = {}
    if (!isMobile) {
      style = { ...this.props.style, ...internalStyles }
    } else {
      style = { ...this.props.style }
    }

    return (
      <div style={style}>
        {!isMobile && <DesktopNavBar style={{ height: "100%" }} />}
        {isMobile && <MobileNavBar style={{ width: "100%" }} />}
      </div>
    );
  }
}
