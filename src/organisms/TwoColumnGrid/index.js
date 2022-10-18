import * as React from "react";

const style = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8rem"
}

const leftGridStyle = {
  flex: 1
}

const rightGridStyle = {
  flex: 2,
}

export default class TwoColumnGrid extends React.Component {
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
    const isMobile = this.state.width < 1020
    const flexDirection = isMobile ? "column" : "row"
    const paddingTop = isMobile ? "0" : "2rem"
    return (
      <div style={{ ...this.props.style, ...style, flexDirection }}>
        <div style={leftGridStyle}>{this.props.children[0]}</div>
        <div style={{...rightGridStyle, paddingTop}}>{this.props.children[1]}</div>
      </div>
    );
  }
}
