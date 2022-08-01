import React from "react";
import { Circle, Tagline } from "../../atoms";

const style = {
  height: "85vh",
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
