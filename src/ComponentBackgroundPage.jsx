import React from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "./Title";
import ButtonStart from "./ButtonStart";
import "./componentbackground.module.css";
import LinkApi from "./ComponentLinkAPI";

const ComponentBackgroundPage = () => {
	return (
		<Container className='backgroundImage' style={{ height: "100vh" }}>
			<LinkApi />
			<Title />
			<ButtonStart />
		</Container>
	);
};

export default ComponentBackgroundPage;
