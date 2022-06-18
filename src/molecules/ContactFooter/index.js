import React from "react";
import "./style.css";
import "../../css/grid.css";
import ContactItem from "../../atoms/ContactItem";

export default class ContactFooter extends React.Component {
  render() {
    return (
      <div className="contact-footer">
        <div className="contact-footer-align">
          <div className="separator" />
          <div className="contact-footer-container two-column-grid">
            <div className="basic">
              <ContactItem
                title="Email"
                url="mailto:alb.garciam@gmail.com"
                display="alb.garciam@gmail.com"
              />
              <p className="contact-footer-title text-regular">
                Let's get in touch
              </p>
            </div>
            <div className="contact-container two-column-grid">
              <ContactItem title="Location" description="Madrid (Spain)" />
              <div className="social-media">
                <ContactItem
                  title="LinkedIn"
                  url="https://www.linkedin.com/in/alberto-garcia-munoz/"
                  display="alberto-garcia-munoz"
                />
                <ContactItem
                  title="Github"
                  url="https://github.com/AlbGarciam"
                  display="AlbGarciam"
                />
                <ContactItem
                  title="Medium"
                  url="https://medium.com/@albgarciam"
                  display="@albgarciam"
                />
              </div>
            </div>
          </div>
          <div className="separator" />
        </div>
      </div>
    );
  }
}
