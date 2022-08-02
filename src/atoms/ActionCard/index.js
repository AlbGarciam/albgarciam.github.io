import React from "react";
import Theme from "../../theme";

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
    return (
      <div
        style={this.backgroundStyle()}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        onClick={this.onClick.bind(this)}
      >
        <div style={containerStyle}>
          {this.props.image != undefined && (
            <img
              style={this.iconStyle()}
              src={this.state.hover ? this.props.imageDark : this.props.image}
              alt={this.props.imageAlt}
            />
          )}
          <div>
            <p style={this.titleStyle()}>{this.props.title}</p>
            <p style={this.subtitleStyle()}>{this.props.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }
}
