import React from "react";
import { Container } from "reactstrap";
import styles from "./home.module.css";
import ModalStart from "./Component/ModalStart";
import Title from "./Component/Title";
import HomeLinkApi from "./Component/HomeLinkAPI";

const Home = () => {
    return (
        <Container className={styles.bghome} fluid>
            <HomeLinkApi />
            <Title />
            <ModalStart />
        </Container>
    );
};

export default Home;
