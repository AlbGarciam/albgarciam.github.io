import * as React from "react";
import { CircleButton } from "../../atoms";
import { ModalSection } from "../../molecules";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "6rem"
}

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "2.5rem"
}

export default class ContactList extends React.Component {
  options(options) {
    return options.map(item => {
      return <CircleButton route={item.route} icon={item.icon}/>
    })
  }

  sections(sections) {
    return sections.map(item => {
      return (<ModalSection header={item.header}>
        <div style={rowStyle}> {this.options(item.options)} </div>
      </ModalSection>)
    })
  }

  render() {
    return (
      <div style={{ ...this.props.style, ...style }}>
        {this.sections(this.props.sections || [])}
      </div>
    );
  }
}
