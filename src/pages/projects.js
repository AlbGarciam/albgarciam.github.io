import * as React from "react";
import { DynamicNavBar, ProjectSection } from "../organisms"
import { TwoToneBackground, Heading } from "../molecules";
import projectsJSON from "../json/projects.json"
import Theme from "../theme";

const mainStyles = {
  position: "absolute",
  top: "0", left: "0", right: "0", bottom: "0",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "0",
}

export default class ProjectsPage extends React.Component {
  state = { width: 0 };

  componentDidMount() {
    const { innerWidth: width } = window;
    this.setState({ width });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  render() {
    const isMobile = this.state.width < 768
    const { projects } = projectsJSON
    return (
      <main style={mainStyles}>
        {!isMobile && <DynamicNavBar style={{ padding: "2.5vh 2.5rem", position: "fixed", top: 0, left: 0 }} />}
        {isMobile && <DynamicNavBar style={{ margin: "2.5rem" }} />}
        <div style={containerStyles}>
          {projects.map(element => { return <ProjectSection element={element} /> })}
        </div>
      </main>
    );
  }
}
