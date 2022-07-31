import React from "react";
import Theme from "../../theme";

const style = {
  fontFamily: Theme.Fonts.p,
  color: Theme.Colors.primaryText,
  textDecoration: "none",
};

export default class FooterItem extends React.Component {
  render() {
    return (
      <a style={style} href={this.props.href}>
        {this.props.text}
      </a>
    );
  }
}
