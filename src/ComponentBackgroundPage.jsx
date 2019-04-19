import React from "react";
import { Container } from "reactstrap";

import "./componentbackground.module.css";
import ModalStart from "./Component/ModalStart";
import Title from "./Component/Title";
import LinkApi from "./Component/ComponentLinkAPI";

const ComponentBackgroundPage = () => {
	return (
		<Container className='backgroundImage' style={{ height: "100vh" }}>
			<LinkApi />
			<Title />
			<ModalStart />
		</Container>
	);
};

export default ComponentBackgroundPage;
