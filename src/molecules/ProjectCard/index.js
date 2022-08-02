import React from "react";
import { ProjectHeader, Pill } from "../../atoms";
import Theme from "../../theme";

const style = {
  width: "32rem",
  backgroundColor: "#444444",
  display: "inline-block",
  position: "relative",
  marginLeft: "2rem",
  borderRadius: "1.5rem",
  padding: "1.5rem",
  flexDirection: "column",
};

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div style={style}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "16rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Pill text="Personal" />
          </div>

          <ProjectHeader title="Nalu" subtitle="2019" />
        </div>
      </div>
    );
  }
}
