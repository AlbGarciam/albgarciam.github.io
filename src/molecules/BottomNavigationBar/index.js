import React from "react";
import { BarNavigationItem, StepProgress, StepToggle } from "../../atoms";

const style = {
    display: "flex",
    flexDirection: "row",
    padding: "0 2.625rem",
    gap: "2rem"
}

export default class BottomNavigationBar extends React.Component {
    render() {
        return (
            <div style={{...this.props.style, ...style}}>
                <StepProgress style={{flex: 3}} current={this.props.currentStep} total={this.props.totalSteps} />
                <StepToggle style={{flex: 1}}downAction={this.props.downAction} upAction={this.props.upAction} />
                <BarNavigationItem style={{flex: 1}} action={this.props.action} text="Contact" />
            </div>
        );
    }
}