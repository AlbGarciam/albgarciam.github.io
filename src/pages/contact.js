import * as React from "react";
import { BottomNavigationBar, Caption, Link, TopNavigationBar } from "../molecules";
import { ContactBadge } from "../organisms";
import { Hero } from "../templates";
import Theme from "../theme"
import { Helmet } from 'react-helmet';

const mainStyles = {
  backgroundColor: Theme.Colors.backgroundSecondary,
  width: "100%",
  height: "100%"
};

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  margin: "9rem max(3rem, 10%)",
  marginBottom: "2rem",
  gap: "9rem"
}

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <Helmet>
          <title>Contact | AlbGarciam</title>
        </Helmet>
        <TopNavigationBar />
        <Hero title={`BRING(ING)<br/>MINDS<br/>TOGHETHER`}/>
        <div style={sectionStyle}>
          <Caption title="iOS runs through my veins" text="If you're looking for an iOS passionate you're in the correct place!. I've been coding on for different iOS platforms since 2017 and I still love it."/>
          <div>
            <Link text="LINKEDIN" route="https://www.linkedin.com/in/alberto-garcia-munoz/" />
            <Link text="GITHUB" route="https://github.com/AlbGarciam/" />
            <Link text="MEDIUM" route="https://medium.com/@albgarciam" />
            <Link text="DRIBBBLE" route="https://dribbble.com/AlbGarciam" />
          </div>
          <Caption title="Not enough?" text="Complex projects means complex environments and without Python, Bash or GO you're going to be blocked."/>
          <img src="/resources/tagline.svg"/>
          <ContactBadge title={`WANT TO<br/>KNOW MORE?`}/>
          <BottomNavigationBar />
        </div>
      </main>
    );
  }
}
