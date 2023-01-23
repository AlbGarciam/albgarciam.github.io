import * as React from "react";
import { BottomNavigationBar, Caption, Link, TopNavigationBar } from "../molecules";
import { ContactBadge } from "../organisms";
import { Hero } from "../templates";
import Theme from "../theme"
import terms from "../resources/terms.json"

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

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "850px",
  margin: "auto",
  marginTop: "12px",
  padding: "0 2rem"
};

const paragraphStyle = {
  fontFamily: Theme.Fonts.paragraph,
  fontSize: "1.2rem",
  color: Theme.Colors.primary,
};

export default class TermsPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <TopNavigationBar />
        <Hero title={`TERMS<br/>AND<br/>CONDS`} />
        <div style={sectionStyle}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={containerStyle}>
              <div>
                <p>{terms.header}</p>
                {terms.paragraphs.map((element) => {
                  return <p style={paragraphStyle}>{element}</p>;
                })}
              </div>
            </div>
          </div>
          <ContactBadge title={`WANT TO<br/>KNOW MORE?`} />
          <BottomNavigationBar />
        </div>
      </main>
    );
  }
}
