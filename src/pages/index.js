import * as React from "react";
import { Navigation, Superheading } from "../organisms";
import Colors from "../theme/Colors";

const mainStyles = {
  position: "absolute",
  top: "0", left: "0", right: "0", bottom: "0",
  backgroundColor: Colors.background,
  display: "flex",
  flexDirection: "column",
};

export default class IndexPage extends React.Component {
  state = { currentStep: 1, totalSteps: 3 };

  downAction() {
    let nextCurrentStep = this.state.currentStep + 1
    if (nextCurrentStep > this.state.totalSteps) {
      nextCurrentStep = 1
    }
    this.setState({ currentStep: nextCurrentStep })
  }

  upAction() {
    let nextCurrentStep = this.state.currentStep - 1
    if (nextCurrentStep < 1) {
      nextCurrentStep = this.state.totalSteps
    }
    this.setState({ currentStep: nextCurrentStep })
  }

  render() {
    return (
      <main style={mainStyles}>
        <Navigation
          currentStep={this.state.currentStep}
          totalSteps={this.state.totalSteps}
          downAction={this.downAction.bind(this)}
          upAction={this.upAction.bind(this)}>
            <Superheading variant="inverted" headerText="to the unknown" text="Hello world" route="/about" button="More"/>
          </Navigation>
      </main>
    );
  }
}
