import * as React from "react";
import { DynamicNavBar } from "../organisms";
import { NavBar, Footer, Heading } from "../molecules";
import { SectionTitle } from "../atoms";
import Theme from "../theme";
import terms from "../json/terms";

const mainStyles = {
  minHeight: "100vh",
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 " + Theme.Sizes.Spacings.m,
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
};

const paragraphStyle = {
  fontFamily: Theme.Fonts.p,
  fontSize: Theme.Sizes.Typographies.p,
  color: Theme.Colors.legal,
};

export default class TermsPage extends React.Component {
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
    const margin = isMobile ? "2.5rem" : "2.5rem 2.5rem 2.5rem 12rem"
    return (
      <main style={mainStyles}>
        {!isMobile && <DynamicNavBar style={{ padding: "2.5vh 2.5rem", position: "fixed", top: 0, left: 0 }} />}
        {isMobile && <DynamicNavBar style={{ margin: "2.5rem" }} />}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin }}>
          <div style={containerStyle}>
            <SectionTitle title="Terms & Conditions" subtitle={terms.header} />
            <div>
              <p>{terms.header}</p>
              {terms.paragraphs.map((element) => {
                return <p style={paragraphStyle}>{element}</p>;
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
