import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';
import ImageEggHome from './ImageEggHome';
import ButtonStart from './ButtonStart';
import styles from './componentbackground.module.css';

const ComponentBackgroundPage = () => {
	return (
		<div>
			{/* <div className={styles.BackgroundHome}>  */}
			<ImageEggHome />
			<Title />
			<ButtonStart />
		</div>
	);
};

export default ComponentBackgroundPage;
