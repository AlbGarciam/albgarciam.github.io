import * as React from "react";

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
}

const leftGridStyle = {
  flex: 1
}

const rightGridStyle = {
  flex: 2
}

export default class TwoColumnGrid extends React.Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...style }}>
        <div style={leftGridStyle}>{this.props.leftChild}</div>
        <div style={rightGridStyle}>{this.props.rightChild}</div>
      </div>
    );
  }
}
