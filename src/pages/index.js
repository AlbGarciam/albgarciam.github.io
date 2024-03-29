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

export default class LandingPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <Helmet>
          <title>Home | AlbGarciam</title>
        </Helmet>
        <TopNavigationBar />
        <Hero title={`BRING<br/>YOUR IDEAS<br/>TO LIFE`}/>
        <div style={sectionStyle}>
          <Caption title="WHAT ABOUT ME" text="Everyone of us loves something different. In my case front-end development is one of these things. From iOS apps to websites or even middlewares, all of them are developed with love and devotion."/>
          <div>
            <Link text="PROJECTS" route="/projects" />
            <Link text="POSTS" route="/blog" />
            <Link text="CONTACT" route="/contact" />
          </div>
          <img src="/resources/tagline.svg"/>
          <ContactBadge title={`WANT TO<br/>KNOW MORE?`}/>
          <BottomNavigationBar />
        </div>
      </main>
    );
  }
}
