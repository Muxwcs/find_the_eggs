import React, { Component } from 'react';
import './App.css';
import ComponentBackgroundPage from './ComponentBackgroundPage';
import NameForm from './NameForm';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<ComponentBackgroundPage />
				<NameForm />
			</div>
		);
	}
}

export default App;
