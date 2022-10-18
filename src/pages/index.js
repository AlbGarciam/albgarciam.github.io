import * as React from "react";
import { LandingCarousel, Modal, Navigation } from "../templates";
import Colors from "../theme/Colors";
import carouselJSON from "../resources/carousels/landing.json"
import contactJSON from "../resources/modals/contact.json"
import { ContactModalHeader } from "../molecules";
import { TwoColumnGrid, ContactList } from "../organisms";

const mainStyles = {
  position: "absolute",
  top: "0", left: "0", right: "0", bottom: "0",
  backgroundColor: Colors.background,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
};

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      totalSteps: carouselJSON.pages.length,
      shouldScroll: true,
      contactModal: false,
      aboutModal: false
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

  contactTapped() {
    this.setState({ contactModal: true })
  }

  aboutTapped() {
    this.setState({ aboutModal: true })
  }

  modalClosed() {
    this.setState({ aboutModal: false, contactModal: false })
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
          showBottomNavigation
          currentStep={this.state.currentStep}
          totalSteps={this.state.totalSteps}
          downAction={this.downAction.bind(this)}
          upAction={this.upAction.bind(this)}
          contactAction={this.contactTapped.bind(this)}
          aboutAction={this.aboutTapped.bind(this)}>
          <LandingCarousel pages={carouselJSON.pages}
            currentPosition={this.state.currentStep - 1}
            onWheel={this.onWheel.bind(this)} />
        </Navigation>
        <Modal enabled={this.state.contactModal} onClose={this.modalClosed.bind(this)}>
          <TwoColumnGrid style={{width: "100%"}}>
            <ContactModalHeader title={contactJSON.title} descriptions={contactJSON.descriptions}/>
            <ContactList sections={contactJSON.sections} />
          </TwoColumnGrid>
        </Modal>
        <Modal enabled={this.state.aboutModal} onClose={this.modalClosed.bind(this)}>
          <TwoColumnGrid style={{width: "100%"}}>
            <ContactModalHeader title={contactJSON.title} descriptions={contactJSON.descriptions}/>
            <ContactList sections={contactJSON.sections} />
          </TwoColumnGrid>
        </Modal>
      </main>
    );
  }
}
