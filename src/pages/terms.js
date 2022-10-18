import * as React from "react";
import Theme from "../theme";
import { Navigation } from "../templates";
import terms from "../resources/terms.json"
import { PageHeader } from "../atoms";

const mainStyles = {
  position: "absolute",
  top: "0", left: "0", right: "0", bottom: "0",
  backgroundColor: Theme.Colors.background,
  display: "flex",
  flexDirection: "column",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "850px",
  margin: "auto",
  marginTop: "44px",
  padding: "0 2rem"
};

const paragraphStyle = {
  fontFamily: Theme.Fonts.paragraph,
  fontSize: "1rem",
  color: Theme.Colors.primary,
};

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <Navigation>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={containerStyle}>
              <PageHeader header="Terms & conditions" subheader="" />
              <div>
                <p>{terms.header}</p>
                {terms.paragraphs.map((element) => {
                  return <p style={paragraphStyle}>{element}</p>;
                })}
              </div>
            </div>
          </div>
        </Navigation>
      </main>
    );
  }
}
