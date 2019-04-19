import React from "react";
import { Container } from "reactstrap";
import "./home.module.css";
import ModalStart from "./Component/ModalStart";
import Title from "./Component/Title";
import HomeLinkApi from "./Component/HomeLinkAPI";

const Home = () => {
	return (
		<Container className='Bghome' style={{ height: "100vh", textAlign: "center" }}>
			<HomeLinkApi />
			<Title />
			<ModalStart />
		</Container>
	);
};

export default Home;
