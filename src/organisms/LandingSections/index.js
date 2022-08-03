import React from "react";
import { navigate } from "gatsby";
import {
  HorizontalCarousel,
  ProjectCard,
} from "../../molecules";
import { ActionCard } from "../../atoms";
import Theme from "../../theme";
import content from "./content.json"

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
  gap: "15rem",
};

export default class LandingSections extends React.Component {
  render() {
    const { projects, social, contact } = content
    return (
      <div style={style}>
        <div style={alignStyles}>
          <HorizontalCarousel
            title={projects.title}
            subtitle={projects.subtitle}
          >
            {projects.cards.map(element => {
              return (<ProjectCard
                project={element}
                onClick={() => {
                  navigate("https://www.linkedin.com/in/alberto-garcia-munoz/");
                }} />)
            })}
          </HorizontalCarousel>
          <HorizontalCarousel
            title={social.title}
            subtitle={social.subtitle}
          >
            {social.cards.map(element => {
              return (<ActionCard element={element} />)
            })}
          </HorizontalCarousel>
          <HorizontalCarousel
            title={contact.title}
            subtitle={contact.subtitle}
          >
            {contact.cards.map(element => {
              return (<ActionCard element={element} />)
            })}
          </HorizontalCarousel>
        </div>
      </div>
    );
  }
}
