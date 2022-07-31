import React from "react";
import { SiteIcon } from "../../atoms";
import Theme from "../../theme";

const navBarStyle = {
  width: Theme.Sizes.Dimensions.full,
  display: "flex",
  justifyContent: "center",
  margin: Theme.Sizes.Spacings.xxxs + " 0",
};

const navBarAlignStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  width: Theme.Sizes.Dimensions.full,
  gap: Theme.Sizes.Spacings.xxxs,
  margin: "0 " + Theme.Sizes.Spacings.m,
  alignItems: "center",
};

const bottomLineStyle = {
  backgroundColor: Theme.Colors.separator,
  width: Theme.Sizes.Dimensions.full,
  height: Theme.Sizes.Dimensions.xxxs,
};

export default class NavBar extends React.Component {
  render() {
    return (
      <div style={navBarStyle}>
        <div style={navBarAlignStyle}>
          <SiteIcon />
          <div style={bottomLineStyle} />
        </div>
      </div>
    );
  }
}
