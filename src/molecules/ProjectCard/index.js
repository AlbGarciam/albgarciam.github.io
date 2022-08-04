import React from "react";
import { ProjectHeader, Pill } from "../../atoms";
import Theme from "../../theme";

const style = (background) => {
  return {
    width: "32rem",
    backgroundColor: Theme.Colors.card,
    display: "inline-block",
    position: "relative",
    marginLeft: "2rem",
    borderRadius: "1.5rem",
    padding: "1.5rem",
    flexDirection: "column",
    backgroundImage: "url(" + background + ")"
  };
}

export default class ProjectCard extends React.Component {
  render() {
    const { background, icon, name, year, tags } = this.props.project
    return (
      <div style={style(background)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "16rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse", gap: "1rem" }}>
            {tags.map(element => {
              return (<Pill text={element} />)
            })}
          </div>
          <ProjectHeader title={name} subtitle={year} image={icon} />
        </div>
      </div>
    );
  }
}
