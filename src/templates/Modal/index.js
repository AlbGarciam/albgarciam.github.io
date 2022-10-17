import * as React from "react";
import Colors from "../../theme/Colors";
import close from "./close.svg"

const style = {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "0", right: "0", bottom: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: Colors.modalBackground,
  transition: "0.45s ease-in-out",
  zIndex: 99999,
};

const iconStyle = {
  width: "44px",
  height: "44px"
}

const containerStyle = {
  margin: "2rem 2.625rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
}

export default class Modal extends React.Component {
  onCloseClicked() {
    this.props.onClose()
  }

  render() {
    return (
      <div style={{ ...style, top: this.props.enabled ? "0%" : "100%" }}>
        <div style={containerStyle }>
          <img
            style={{ ...iconStyle }}
            src={close}
            alt="close"
            onClick={this.onCloseClicked.bind(this)}
          />
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
