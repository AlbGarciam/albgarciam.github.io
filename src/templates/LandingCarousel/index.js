import * as React from "react";
import { Superheading } from "../../organisms";

const style = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0", left: "0", right: "0", bottom: "0",
  overflow: "hidden",
  transition: "1.25s ease-in-out"
};

export default class LandingCarousel extends React.Component {
  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel.bind(this));
  }

  handleWheel(event) {
    this.props.onWheel(event)
  }

  renderSuperheading(page, position, shift) {
    const style = {
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: (100 * (position - shift)) + "%", left: "0", right: "0", bottom: "0",
      transition: "1.25s ease-in-out"
    };
    return (<div style={style}>
      <Superheading
        variant={page.variant}
        headerText={page.title}
        text={page.description}
        route={page.route}
        button={page.button} />
    </div>)
  }

  render() {
    const { pages } = this.props;
    var items = []
    pages.forEach(page => {
      items.push(this.renderSuperheading(page, items.length, this.props.currentPosition));
    });
    return (
      <div style={style}>
        {items}
      </div>
    );
  }
}
