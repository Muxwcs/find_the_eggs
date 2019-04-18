import React from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "./Title";
import ButtonStart from "./ButtonStart";
import styles from "./componentbackground.module.css";
import LinkApi from "./ComponentLinkAPI";

const ComponentBackgroundPage = () => {
	return (
		<div>
			<LinkApi />
			<Title />
			<ButtonStart />
		</div>
	);
};

export default ComponentBackgroundPage;
