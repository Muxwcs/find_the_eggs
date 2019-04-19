import React, { Component } from "react";
// import axios from 'axios';
import { Button, Modal, Container, Col, ModalHeader, ModalBody, ModalFooter, Input, FormFeedback, FormGroup } from "reactstrap";

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = { InputValue: "", modal: true, isInvalid: false, isClick: false };
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	handleClick() {
		this.setState({ isClick: true });
	}
	//sur chagement de valeur saisie, on interdit un bakspace et on passe la valeur entrée à "Valid"
	handleChange = event => {
		this.setState({ InputValue: event.target.value.replace(/[ ]/gi, "") });
		this.setState({ isInvalid: false });
	};
	//sur click, vérification valeur dans Input
	toggle() {
		const pseudo = this.state.InputValue;
		if (pseudo.length === 0) {
			this.setState({ isInvalid: true });
		} else {
			localStorage.setItem("pseudo", pseudo);
			this.setState(prevState => ({
				modal: !prevState.modal,
			}));
		}
	}
	render() {
		return (
			<>
				{/* // 		<div>
// <Button >
//  					
// 				</Button>
// 				<Modal click={this.state.click} toggle={this.toggle}>
// 					<ModalHeader toggle={this.toggle}>
// 						<h3>Login</h3>
// 					</ModalHeader>
// 					<ModalBody>
// 						<FormGroup>
// 							<Input id='name' type='text' pseudo={this.state.InputValue} onChange={this.handleChange} invalid={this.state.isInvalid} />
// 							<FormFeedback>Oh F**k... Please enter your nickname stupid guy !</FormFeedback>
// 						</FormGroup>
// 					</ModalBody>
// 					<ModalFooter>
// 						<Button color={this.state.isInvalid ? "danger" : "primary"} onClick={this.toggle}>
// 							Sign up
// 						</Button>{" "}
// 					</ModalFooter>
// 				</Modal>
// 			</div>  */}

				<Container className='FooterCSS'>
					<Col className='FooterCSS'>
						<Button outline color='success' onClick={this.handleClick}>
							START
						</Button>
					</Col>
				</Container>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header>
						<Modal.Title>Test</Modal.Title>
					</Modal.Header>
					<Modal.Body>Test</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={this.handleClose}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default NameForm;
