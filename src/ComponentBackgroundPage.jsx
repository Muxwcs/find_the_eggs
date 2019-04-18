import React from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "./Title";
import ImageEggHome from "./ImageEggHome";
import ButtonStart from "./ButtonStart";
import "./componentbackground.module.css";

const ComponentBackgroundPage = () => {
	return (
		<Container className='backgroundImage' style={{ height: "100vh" }}>
			<ImageEggHome />
			<Title />
			<ButtonStart />
		</Container>
	);
};

export default ComponentBackgroundPage;
