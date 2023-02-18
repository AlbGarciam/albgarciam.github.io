import * as React from "react";
import { BottomNavigationBar, Caption, Link, TopNavigationBar } from "../molecules";
import { ContactBadge } from "../organisms";
import { Hero } from "../templates";
import Theme from "../theme"

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
        <TopNavigationBar />
        <Hero title={`BRING(ING)<br/>YOUR IDEAS<br/>TO LIFE`}/>
        <div style={sectionStyle}>
          <Caption title="SO CLEAN, SO GOOD" text="CLEAN architecture is the base of all the projects. Allowing us to develop segregated layers to structure our applications is the key for success. "/>
          <div>
            <Link text="LOST" route="https://apps.apple.com/us/app/lost-aceptas-el-reto/id1666019387" />
            <Link text="PACER" route="https://apps.apple.com/ar/app/pacer-stay-on-pace/id1627313100" />
            <Link text="NALU" route="https://nalu.gitlab.io" />
            <Link text="DEPENDENCY INJECTION" route="https://github.com/AlbGarciam/DependencyInjection" />
            <Link text="GITHUB" route="https://github.com/AlbGarciam/" />
          </div>
          <img src="/resources/products-tagline.svg"/>
          <ContactBadge title={`WANT TO<br/>KNOW MORE?`}/>
          <BottomNavigationBar />
        </div>
      </main>
    );
  }
}
