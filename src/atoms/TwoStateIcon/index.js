import React from "react";
import Theme from "../../theme";

const internalStyles = {
  height: "2rem",
  width: "2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
}

const commonImageStyle = {
  position: "absolute",
  transition: "opacity 0.25s linear",
  height: "2rem",
  width: "auto"
}

export default class TwoStateIcon extends React.Component {
  onClick() {
    this.props.onClick()
  }

  render() {
    const style = { ...this.props.style, ...internalStyles }
    return (<div style={style}>
      <img
        style={{ ...commonImageStyle, opacity: this.props.active ? "0" : "1" }}
        src={this.props.disabledSrc}
        onClick={this.onClick.bind(this)} />
      <img
        style={{ ...commonImageStyle, opacity: this.props.active ? "1" : "0" }}
        src={this.props.enabledSrc}
        onClick={this.onClick.bind(this)} />
    </div>);
  }
}
