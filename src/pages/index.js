import * as React from "react";
import { ActionCard, MouseIcon, SectionTitle } from "../atoms";
import {
  ContactSection,
  Footer,
  NavBar,
  SocialNetworkSection,
  TaglineContainer,
} from "../molecules";
import Theme from "../theme";

const mainStyles = {
  minHeight: "100vh",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};

const sectionStyles = {
  width: Theme.Sizes.Dimensions.full,
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  display: "flex",
  flexDirection: "column",
  margin: "7.5rem 0",
  gap: "7.5rem",
};

export default class IndexPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <NavBar />
        <TaglineContainer />
        <MouseIcon />
        <div style={sectionStyles}>
          <SocialNetworkSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    );
  }
}
