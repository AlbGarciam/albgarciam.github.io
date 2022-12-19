import * as React from "react";
import Theme from "../../theme";

const style = {
  backgroundColor: Theme.Colors.backgroundPrimary,
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0 0 8rem 8rem"
};

const headingStyle = {
  fontFamily: Theme.Fonts.Family.heading,
  fontWeight: Theme.Fonts.Weight.h1,
  fontSize: Theme.Sizes.Typographies.h2,
  textAlign: "center",
  margin: "0",
};

const containerStyle = {
  padding: "5.5rem 2rem",
};

export default class ContactBadge extends React.Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...style }}>
        <div style={containerStyle}>
          {
            this.props.title.split("<br/>").map(text => {
              return <h2 style={headingStyle}>{text}</h2>
            })
          }
        </div>
      </div>
    );
  }
}
