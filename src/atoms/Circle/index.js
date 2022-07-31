import React from "react";
import Theme from "../../theme";

const style = {
  width: "38rem",
  backgroundColor: "#131313",
  borderRadius: "50%",
  display: "inline-block",
  aspectRatio: "1",
  gridArea: "1/1/1/1",
};

export default class Circle extends React.Component {
  render() {
    return <div style={style} />;
  }
}
