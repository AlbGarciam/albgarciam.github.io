import * as React from "react";
import "./contact.css";
import "../css/grid.css";
import "../css/typography.css";
import NavBar from "../molecules/NavBar";
import ContactItem from "../atoms/ContactItem";

export default class Contact extends React.Component {
  onGetResumeTapped() {}

  render() {
    return (
      <main className="contact-main">
        <NavBar light={true} />
      </main>
    );
  }
}
