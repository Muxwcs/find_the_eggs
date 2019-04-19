import React, { Component } from 'react';
import './App.css';
// import ComponentBackgroundPage from './ComponentBackgroundPage';
import Skeleton from './skeleton';

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* <Switch>
					<ComponentBackgroundPage />
				</Switch> */}
				<Skeleton />
			</div>
		);
	}
}

export default App;
