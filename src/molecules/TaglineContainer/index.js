import React from "react";
import { Circle, Tagline } from "../../atoms";

const style = {
  width: "100%",
  height: "85%",
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
};

export default class NavBar extends React.Component {
  render() {
    return (
      <div style={style}>
        <Circle />
        <Tagline />
      </div>
    );
  }
}
