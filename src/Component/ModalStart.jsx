import React, { Component } from "react";
import { Button, Modal, ModalBody, FormGroup, FormFeedback, Input } from "reactstrap";
import RogerRabbit from "./RogerImage";

class ModalStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal,
		}));
	}

	render() {
		return (
			<div>
				<Button color='danger' onClick={this.toggle}>
					Start
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalBody>
						<RogerRabbit />
						<h3 style={{ textAlign: "center" }}>Enter your Nickname : </h3>
						<FormGroup>
							<Input id='name' type='text' pseudo={this.state.InputValue} onChange={this.handleChange} invalid={this.state.isInvalid} />
							<FormFeedback>Oh F**k... Please enter your nickname stupid guy !</FormFeedback>
						</FormGroup>
						<div style={{ textAlign: "center" }}>
							<Button outline color='danger' onClick={this.toggle}>
								Play
							</Button>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default ModalStart;
