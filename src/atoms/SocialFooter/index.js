import React from "react";
import { navigate } from "gatsby";

const iconStyle = {
  height: "2rem",
  width: "2rem"
}

export default class SocialFooter extends React.Component {

  render() {
    return (<div style={{ display: "flex", gap: "1rem" }}>
      <a style={iconStyle} href="https://github.com/AlbGarciam">
        <img style={iconStyle} src="/images/github.svg" alt="AlbGarciam's Github" />
      </a>
      <a style={iconStyle} href="https://www.linkedin.com/in/alberto-garcia-munoz/">
        <img style={iconStyle} src="/images/linkedin.svg" alt="AlbGarciam's LinkedIn" />
      </a>
    </div>)
  }
}
