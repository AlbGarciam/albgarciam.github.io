import React from "react";
import { navigate } from "gatsby";
import { ActionCard, SectionTitle } from "../../atoms";
import Theme from "../../theme";

export default class ContactSection extends React.Component {
  constructor() {
    super();
    const { innerWidth: width } = window;
    this.state = { width };
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  displayAsColumn() {
    const { width } = this.state;
    return width < 768;
  }
  style() {
    return {
      display: "flex",
      flexDirection: this.displayAsColumn() ? "column" : "row",
      gap: "2rem",
      alignItems: "flex-start",
      maxWidth: Theme.Sizes.Dimensions.maxWidth,
      margin: "0 " + Theme.Sizes.Spacings.m,
    };
  }

  scrollStyle() {
    let attributes = {
      display: "flex",
      flexDirection: "row",
      gap: "2.5rem",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: "2rem",
      flexGrow: 1,
    };
    if (this.displayAsColumn()) {
      attributes["width"] = Theme.Sizes.Dimensions.full;
    }
    return attributes;
  }

  onDownloadResume() {
    console.log("Download resume");
  }

  onSendEmail() {
    navigate("mailto:alb.garciam@gmail.com");
  }

  render() {
    return (
      <div style={this.style()}>
        <SectionTitle
          title="Is it a match?"
          subtitle="If you think I can match to your company or just want to keep in touch for new projects feel free to contact me or to download my Resume."
        />
        <div style={this.scrollStyle()}>
          <ActionCard
            title="Download"
            subtitle="Resume"
            onClick={this.onDownloadResume.bind(this)}
          />
          <ActionCard
            title="Send"
            subtitle="Email"
            onClick={this.onSendEmail.bind(this)}
          />
        </div>
      </div>
    );
  }
}
