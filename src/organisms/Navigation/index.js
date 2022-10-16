import * as React from "react";
import { BottomNavigationBar, TopNavigationBar } from "../../molecules";

const mainStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0", left: "0", right: "0", bottom: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

export default class Navigation extends React.Component {
  render() {
    return (
      <div style={mainStyles}>
        <TopNavigationBar />
        {this.props.children}
        <BottomNavigationBar
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          downAction={this.props.downAction}
          upAction={this.props.upAction} />
      </div>
    );
  }
}
