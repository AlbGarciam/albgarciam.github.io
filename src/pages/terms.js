import * as React from "react";
import { NavBar, Footer } from "../molecules";
import { SectionTitle } from "../atoms";
import Theme from "../theme";
import terms from "../json/terms";

const mainStyles = {
  width: Theme.Sizes.Dimensions.full,
  minHeight: "100vh",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: Theme.Sizes.Spacings.m,
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
};

const paragraphStyle = {
  fontFamily: Theme.Fonts.p,
  fontSize: Theme.Sizes.Typographies.p,
  color: Theme.Colors.legal,
};

export default class TermsPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <NavBar />
        <div style={containerStyle}>
          <SectionTitle title="Terms & Conditions" subtitle={terms.header} />
          <div className="terms-column">
            <p className="terms-disclaimer text-medium">{terms.header}</p>
            {terms.paragraphs.map((element) => {
              return <p style={paragraphStyle}>{element}</p>;
            })}
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
