import React, { Component } from 'react';
// import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormFeedback, FormGroup } from 'reactstrap';

class NameForm extends Component {
	constructor() {
		super();
		this.state = { InputValue: '', modal: true, isInvalid: false };
		this.handleChange = this.handleChange.bind(this);
		this.toggle = this.toggle.bind(this);
	}
	//sur chagement de valeur saisie, on interdit un bakspace et on passe la valeur entrée à "Valid"
	handleChange = event => {
		this.setState({ InputValue: event.target.value.replace(/[ ]/gi, '') });
		this.setState({ isInvalid: false });
	};
	//sur click, vérification valeur dans Input
	toggle() {
		const pseudo = this.state.InputValue;
		if (pseudo.length === 0) {
			this.setState({ isInvalid: true });
		} else {
			localStorage.setItem('pseudo', pseudo);
			this.setState(prevState => ({
				modal: !prevState.modal
			}));
		}
	}
	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>
						<h3>Login</h3>
					</ModalHeader>
					<ModalBody>
						<FormGroup>
							<Input
								id='name'
								type='text'
								pseudo={this.state.InputValue}
								onChange={this.handleChange}
								invalid={this.state.isInvalid}
							/>
							<FormFeedback>Oh F**k... Please enter your nickname stupid guy !</FormFeedback>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color={this.state.isInvalid ? 'danger' : 'primary'} onClick={this.toggle}>
							Sign up
						</Button>{' '}
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default NameForm;
