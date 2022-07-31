import React from "react";
import { FooterItem, SiteIcon } from "../../atoms";
import Theme from "../../theme";

const footerStyle = {
  width: Theme.Sizes.Dimensions.full,
  display: "flex",
  justifyContent: "center",
  margin: Theme.Sizes.Spacings.xxxs + " 0",
};

const footerAlignStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  width: Theme.Sizes.Dimensions.full,
  gap: Theme.Sizes.Spacings.xxxs,
  margin: "0 " + Theme.Sizes.Spacings.m,
  alignItems: "center",
};

const topLineStyle = {
  backgroundColor: Theme.Colors.separator,
  width: Theme.Sizes.Dimensions.full,
  height: Theme.Sizes.Dimensions.xxxs,
};

const footerContentStyle = {
  display: "flex",
  flexDirection: "row",
  maxWidth: Theme.Sizes.Dimensions.maxWidth,
  width: Theme.Sizes.Dimensions.full,
  gap: Theme.Sizes.Spacings.xxxs,
  alignItems: "center",
  justifyContent: "flex-start",
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        <div style={footerAlignStyle}>
          <div style={topLineStyle} />
          <div style={footerContentStyle}>
            <SiteIcon />
            <div style={{ flexGrow: "1" }} />
            <FooterItem href="/terms" text="Terms & Conditions" />
          </div>
        </div>
      </div>
    );
  }
}
