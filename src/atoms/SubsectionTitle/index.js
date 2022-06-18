import React from "react";
import "./style.css";

export default class SubsectionTitle extends React.Component {
  render() {
    return (
      <div className="sub-section">
        <div className="circle" />
        <div>
          {this.props.title.split("<br/>").map((item, i) => (
            <section className="sub-section-title text-regular" key={i}>
              {item}
            </section>
          ))}
          <h6 className="sub-section-subtitle text-light">
            {this.props.subtitle}
          </h6>
        </div>
      </div>
    );
  }
}
