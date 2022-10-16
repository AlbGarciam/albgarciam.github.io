import * as React from "react";
import { LandingCarousel, Navigation } from "../templates";
import Colors from "../theme/Colors";
import carouselJSON from "../resources/carousels/landing.json"

const mainStyles = {
  position: "absolute",
  top: "0", left: "0", right: "0", bottom: "0",
  backgroundColor: Colors.background,
  display: "flex",
  flexDirection: "column",
};

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      totalSteps: carouselJSON.pages.length,
      shouldScroll: true
    }
  }

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

  onWheel(event) {
    if (!this.state.shouldScroll) { return }
    this.setState({shouldScroll: false})
    if (event.deltaY > 0) {
      this.downAction()
    } else if (event.deltaY < 0) {
      this.upAction()
    }
    setTimeout(() => {
      this.setState({shouldScroll: true})
    }, 1.25*1000);
  }

  render() {
    return (
      <main style={mainStyles}>
        <Navigation
          currentStep={this.state.currentStep}
          totalSteps={this.state.totalSteps}
          downAction={this.downAction.bind(this)}
          upAction={this.upAction.bind(this)}>
          <LandingCarousel pages={carouselJSON.pages}
            currentPosition={this.state.currentStep - 1}
            onWheel={this.onWheel.bind(this)} />
        </Navigation>
      </main>
    );
  }
}
