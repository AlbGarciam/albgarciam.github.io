import * as React from "react";
import { NavBar, TaglineContainer } from "../molecules";

const mainStyles = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default class IndexPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <NavBar light={false} />
        <TaglineContainer />
        <div />
      </main>
    );
  }
}
