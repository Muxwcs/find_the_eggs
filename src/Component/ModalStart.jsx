import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, FormFeedback, Input } from "reactstrap";

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
					{/* <ModalHeader toggle={this.toggle}>Enter your Nickname : </ModalHeader> */}
					<ModalBody>
						<h3>Enter your Nickname : </h3>
						<FormGroup>
							<Input id='name' type='text' pseudo={this.state.InputValue} onChange={this.handleChange} invalid={this.state.isInvalid} />
							<FormFeedback>Oh F**k... Please enter your nickname stupid guy !</FormFeedback>
						</FormGroup>
						<Button color='primary' onClick={this.toggle}>
							Play
						</Button>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default ModalStart;
