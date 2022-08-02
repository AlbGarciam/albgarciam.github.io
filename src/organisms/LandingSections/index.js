import React from "react";
import { navigate } from "gatsby";
import {
  ContactSection,
  HorizontalCarousel,
  SocialNetworkSection,
} from "../../molecules";
import { ActionCard } from "../../atoms";
import Theme from "../../theme";
import githubIcon from "./icons/github.svg";
import githubIconDark from "./icons/github-dark.svg";
import linkedinIcon from "./icons/linkedin.svg";
import linkedinIconDark from "./icons/linkedin-dark.svg";

const style = {
  width: Theme.Sizes.Dimensions.full,
  display: "flex",
  justifyContent: "center",
};

const alignStyles = {
  flex: "1",
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  display: "flex",
  flexDirection: "column",
  margin: "7.5rem 2rem 7.5rem 0rem",
  gap: "7.5rem",
};

export default class LandingSections extends React.Component {
  render() {
    return (
      <div style={style}>
        <div style={alignStyles}>
          <HorizontalCarousel
            title="Want to keep in touch?"
            subtitle="Feel free to follow me in my social networks. I usually post my code in Github and feel free to contact me on LinkedIn."
          >
            <ActionCard
              image={linkedinIcon}
              imageDark={linkedinIconDark}
              imageAlt="LinkedIn icon"
              title="Connect on"
              subtitle="LinkedIn"
              onClick={() => {
                navigate("https://www.linkedin.com/in/alberto-garcia-munoz/");
              }}
            />
            <ActionCard
              image={githubIcon}
              imageDark={githubIconDark}
              imageAlt="Github icon"
              title="Connect on"
              subtitle="Github"
              onClick={() => {
                navigate("https://github.com/AlbGarciam");
              }}
            />
          </HorizontalCarousel>
          <HorizontalCarousel
            title="Is it a match?"
            subtitle="If you think I can match to your company or just want to keep in touch for new projects feel free to contact me or to download my Resume."
          >
            <ActionCard
              title="Download"
              subtitle="Resume"
              onClick={() => {
                navigate("https://albgarciam.github.io/resume.pdf");
              }}
            />
            <ActionCard
              title="Send"
              subtitle="Email"
              onClick={() => {
                navigate("mailto:alb.garciam@gmail.com");
              }}
            />
          </HorizontalCarousel>
        </div>
      </div>
    );
  }
}
