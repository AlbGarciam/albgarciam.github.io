import * as React from "react";
import PortfolioButton from "../../atoms/PortfolioButton";
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

const buttonContainerStyle = {
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  paddingTop: "5.125rem"
}

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
          <div style={buttonContainerStyle}>
            <PortfolioButton text="GET RESUME" route="/resources/resume.pdf"/>
            <PortfolioButton variant="secondary" text="LET'S TALK" route="mailto:alb.garciam@gmail.com"/>
          </div>
        </div>
      </div>
    );
  }
}
