import React from "react";
import { DesktopNavBar, MobileNavBar } from "../../molecules";
import Theme from "../../theme";

const internalStyles = {
  backgroundColor: "clear",
  height: "100%"
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
    const style = { ...this.props.style, ...internalStyles }
    const isMobile = this.state.width <= 768
    return (
      <div style={style}>
        {!isMobile && <DesktopNavBar style={{ height: "100%" }} />}
        {isMobile && <MobileNavBar style={{ width: "100%" }} />}
      </div>
    );
  }
}
