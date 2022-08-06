import React from "react";
import Theme from "../../theme";

const internalStyles = {
  display: "flex",
  justifyContent: "flex-end"
}

const twoToneBackground = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: Theme.Colors.card,
}

const imageStyle = {
  height: "auto",
  margin: "0 4rem",
  userSelect: "none"
}

export default class TwoToneBackground extends React.Component {
  state = { width: 0 };

  componentDidMount() {
    const { innerWidth: width } = window;
    this.setState({ width });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  render() {
    const style = { ...this.props.style, ...internalStyles }
    const width = (this.state.width < 768 ? "100%" : "50%")
    return (
      <div style={style}>
        <div style={{ ...twoToneBackground, width }} >
          <img style={imageStyle} src={this.props.image} />
        </div>
      </div >
    );
  }
}
