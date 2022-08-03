import React from "react";
import Theme from "../../theme";
import { navigate } from "gatsby";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

export default class ActionCard extends React.Component {
  constructor() {
    super();
    this.state = { hover: false };
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  onClick() {
    this.props.onClick();
  }

  backgroundStyle() {
    const { hover } = this.state;
    return {
      display: "inline-block",
      position: "relative",
      width: "10rem",
      backgroundColor: hover ? Theme.Colors.cardActive : Theme.Colors.card,
      borderRadius: Theme.Sizes.Dimensions.radius,
      transition: "0.25s",
      padding: "2.5rem 2rem",
      maxWidth: "15rem",
      flex: "1",
      marginLeft: "2rem",
    };
  }

  titleStyle() {
    const { hover } = this.state;
    return {
      color: hover
        ? Theme.Colors.invertedPrimaryText
        : Theme.Colors.primaryText,
      fontFamily: Theme.Fonts.title,
      fontSize: Theme.Fonts.title,
      transition: "0.25s",
      margin: "0",
    };
  }

  subtitleStyle() {
    const { hover } = this.state;
    return {
      color: hover
        ? Theme.Colors.invertedPrimaryText
        : Theme.Colors.primaryText,
      fontFamily: Theme.Fonts.p,
      fontSize: Theme.Fonts.p,
      transition: "0.25s",
      margin: "0",
    };
  }

  iconStyle() {
    const { hover } = this.state;
    return {
      color: hover
        ? Theme.Colors.invertedPrimaryText
        : Theme.Colors.primaryText,
      height: "2.875rem",
      width: "2.875rem",
      transition: "0.25s",
    };
  }

  render() {
    const { title, subtitle, icon, link } = this.props.element
    return (
      <div
        style={this.backgroundStyle()}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        onClick={() => { navigate(link) }}
      >
        <div style={containerStyle}>
          {icon != null && (
            <img
              style={this.iconStyle()}
              src={this.state.hover ? icon.hover : icon.src}
              alt={icon.alt}
            />
          )}
          <div>
            <p style={this.titleStyle()}>{title}</p>
            <p style={this.subtitleStyle()}>{subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}