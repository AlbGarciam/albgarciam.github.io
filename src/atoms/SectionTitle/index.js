import React from "react";
import "./style.css";

export default class SectionTitle extends React.Component {
  render() {
    return (
      <div className="section-title">
        {this.props.title.split("<br/>").map((item, i) => (
          <h1 className="text-regular" key={i}>
            {item}
          </h1>
        ))}
      </div>
    );
  }
}
