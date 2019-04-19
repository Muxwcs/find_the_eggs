import React, {Component} from 'react';
import {Container} from 'reactstrap';
import rayman from './img/rayman.jpg';
import './skeleton.css';

class Skeleton extends Component {
	render() {
		return (
    
            <div className='fkin_dude' >
                <img src={rayman} style= {{ height:'auto', width:'70vw' }}/>
            </div>
		);
	}
}
export default Skeleton;