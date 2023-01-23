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

export default class BlogPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <TopNavigationBar />
        <Hero title={`SHOW(ING)<br/>YOUR<br/>IDEAS`}/>
        <div style={sectionStyle}>
          <Caption title="TONS OF STORIES" text="Sharing your knowledge is the key of success. As you learn from others during your career, you should teach others. It's the circle of (development) life."/>
          <div>
            <Link text="REDUCE YOUR BUILDING TIMES" route="https://albgarciam.medium.com/reduce-build-times-on-your-ios-app-86a964e0f3bf" />
            <Link text="CREATING ABI STABLE LIBRARIES" route="https://albgarciam.medium.com/creating-abi-stable-swift-libraries-fe82aaa51250" />
            <Link text="SWIFTUI, READY FOR PROD?" route="https://medium.com/codex/is-swiftui-suitable-for-production-4a92eb55751b" />
          </div>
          <img src="/resources/products-tagline.svg"/>
          <ContactBadge title={`WANT TO<br/>KNOW MORE?`}/>
          <BottomNavigationBar />
        </div>
      </main>
    );
  }
}
