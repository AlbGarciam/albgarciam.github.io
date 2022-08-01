import React from "react";
import { navigate } from "gatsby";
import { ActionCard, SectionTitle } from "../../atoms";
import Theme from "../../theme";
import githubIcon from "./icons/github.svg";
import githubIconDark from "./icons/github-dark.svg";
import linkedinIcon from "./icons/linkedin.svg";
import linkedinIconDark from "./icons/linkedin-dark.svg";

export default class SocialNetworkSection extends React.Component {
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

  displayAsColumn() {
    const { width } = this.state;
    return width < 768;
  }
  style() {
    return {
      display: "flex",
      flexDirection: this.displayAsColumn() ? "column" : "row",
      gap: "2rem",
      alignItems: "flex-start",
      maxWidth: Theme.Sizes.Dimensions.maxWidth,
      margin: "0 " + Theme.Sizes.Spacings.m,
    };
  }

  scrollStyle() {
    let attributes = {
      display: "flex",
      flexDirection: "row",
      gap: "2.5rem",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: "2rem",
      flexGrow: 1,
      overflowX: "scroll",
    };
    if (this.displayAsColumn()) {
      attributes["width"] = Theme.Sizes.Dimensions.full;
    }
    return attributes;
  }

  onLinkedInClicked() {
    navigate("https://linkedin.com/in/alberto-garcia-munoz/");
  }

  onGithubClicked() {
    navigate("https://github.com/AlbGarciam");
  }

  render() {
    return (
      <div style={this.style()}>
        <SectionTitle
          title="Want to keep in touch?"
          subtitle="Feel free to follow me in my social networks. I usually post my code in Github and feel free to contact me on LinkedIn."
        />
        <div className="horizontal-scroll" style={this.scrollStyle()}>
          <ActionCard
            image={linkedinIcon}
            imageDark={linkedinIconDark}
            imageAlt="LinkedIn icon"
            title="Connect on"
            subtitle="LinkedIn"
            onClick={this.onLinkedInClicked.bind(this)}
          />
          <ActionCard
            image={githubIcon}
            imageDark={githubIconDark}
            imageAlt="Github icon"
            title="Connect on"
            subtitle="Github"
            onClick={this.onGithubClicked.bind(this)}
          />
        </div>
      </div>
    );
  }
}
