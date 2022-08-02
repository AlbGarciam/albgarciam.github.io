import React from "react";
import { SectionTitle } from "../../atoms";
import Theme from "../../theme";

const scrollStyle = {
  display: "block",
  marginTop: "2rem",
  width: "100%",
  overflowX: "scroll",
  whiteSpace: "nowrap",
};

const scrollAlignStyles = (displayAsColumn) => {
  let attributes = {
    display: "block",
    overflowX: "hidden",
    width: "100%",
  };
  if (!displayAsColumn) {
    attributes["gridArea"] = "1/1/1/1";
  }
  return attributes;
};

const sectionStyles = (displayAsColumn) => {
  let attributes = {};
  if (displayAsColumn) {
    attributes = {
      display: "grid",
      flexDirection: "column",
      justifyItems: "flex-start",
    };
  } else {
    attributes = {
      display: "grid",
      alignItems: "flex-start",
      justifyItems: "flex-start",
    };
  }
  return {
    ...attributes,
    gap: "2rem",
    maxWidth: Theme.Sizes.Dimensions.maxWidth,
    margin: "0 " + Theme.Sizes.Spacings.m,
    width: "100%",
  };
};

export default class HorizontalCarousel extends React.Component {
  state = { width: 0, titleWidth: 0, opacity: 1 };

  componentDidMount() {
    const { innerWidth: width } = window;
    this.setState({ width, titleWidth: this.container.offsetWidth });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  handleScroll() {
    const { left } = this.firstCell.getBoundingClientRect();
    const { width, titleWidth } = this.state;
    if (width < 768) {
      return;
    }
    const opacity = Math.max(0, Math.min(1, left / titleWidth));
    this.setState({ opacity });
  }

  render() {
    const { width, titleWidth, opacity } = this.state;
    const marginLeft = width < 768 ? "-2rem" : titleWidth + 32 + "px";
    return (
      <div style={sectionStyles(width < 768)}>
        <SectionTitle
          title={this.props.title}
          subtitle={this.props.subtitle}
          opacity={opacity}
          innerRef={(el) => (this.container = el)}
        />
        <div style={scrollAlignStyles(width < 768)}>
          <div
            className="horizontal-scroll"
            style={scrollStyle}
            onScroll={this.handleScroll.bind(this)}
          >
            <div
              style={{
                marginLeft,
                display: "inline-block",
                position: "relative",
                width: "0px",
                heigth: "0px",
              }}
              ref={(el) => (this.firstCell = el)}
            />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
