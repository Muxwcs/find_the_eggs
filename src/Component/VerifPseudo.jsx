import React, { Component } from 'react';
import NameForm from './NameForm';

class VerifPseudo extends Component {
	render() {
		return <div>{'pseudo' in localStorage ? null : <NameForm />}</div>;
	}
}

export default VerifPseudo;
