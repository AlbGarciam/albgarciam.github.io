import * as React from "react";
import Theme from "../../theme";

const style = {
  backgroundColor: Theme.Colors.backgroundPrimary,
  width: "100%",
  height: "calc(100vh - 2rem)",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
};

const headingStyle = {
  fontFamily: Theme.Fonts.Family.heading,
  fontWeight: Theme.Fonts.Weight.h1,
  fontSize: Theme.Sizes.Typographies.superheadings,
  margin: "0 1rem",
};

const containerStyle = {
  margin: "0",
};

export default class Hero extends React.Component {
  render() {
    return (
      <div style={style}>
        <div style={containerStyle}>
          {
            this.props.title.split("<br/>").map(text => {
              return <h1 style={headingStyle}>{text}</h1>
            })
          }
        </div>
      </div>
    );
  }
}
