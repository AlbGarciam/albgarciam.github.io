import * as React from "react";
import { TopNavigationBar } from "../molecules";
import { ContactBadge } from "../organisms";
import { Hero } from "../templates";
import Theme from "../theme"

const mainStyles = {
  backgroundColor: Theme.Colors.backgroundSecondary,
  width: "100%",
  height: "100%"
};

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <TopNavigationBar />
        <Hero title={`BRING<br/>YOUR IDEAS<br/>TO LIFE`}/>
        <ContactBadge title={`WANT TO<br/>KNOW MORE?`} style={{margin: "9rem max(3rem, 10%)"}}/>
      </main>
    );
  }
}
