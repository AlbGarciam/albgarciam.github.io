import * as React from "react";
import { MouseIcon } from "../atoms";
import {
  ContactSection,
  Footer,
  NavBar,
  SocialNetworkSection,
  TaglineContainer,
} from "../molecules";
import { LandingSections } from "../organisms";
import Theme from "../theme";

const mainStyles = {
  minHeight: "100vh",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};

export default class IndexPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <NavBar />
        <TaglineContainer />
        <MouseIcon />
        <LandingSections />
        <Footer />
      </main>
    );
  }
}
