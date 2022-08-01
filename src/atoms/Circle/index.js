import React from "react";
import Theme from "../../theme";

export default class Circle extends React.Component {
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

  style() {
    const { width } = this.state;
    return {
      width: width > 768 ? "38rem" : "25rem",
      backgroundColor: "#131313",
      borderRadius: "50%",
      display: "inline-block",
      aspectRatio: "1",
      gridArea: "1/1/1/1",
    };
  }

  render() {
    return <div style={this.style()} />;
  }
}
