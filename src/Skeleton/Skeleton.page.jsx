import React, { Component } from "react";
import { Container } from "reactstrap";
import styles from "./skeleton.module.css";
import LevelLinkApi from "../Component/LevelLinkApi";

class Skeleton extends Component {
    render() {
        return (
            <Container className={styles.bgrayman} fluid>
                <LevelLinkApi />
            </Container>
        );
    }
}
export default Skeleton;
