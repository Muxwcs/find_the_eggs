import React, { Component } from "react";
import "./skeleton.module.css";
import logo from "./img/rayman.jpg";
import LevelLinkApi from "./Component/LevelLinkApi";

class Skeleton extends Component {
	render() {
		return (
			<div>
				<img src={logo} style={{ maxWidth: "100%", marginTop: "100px" }} alt='lalala' />
				<LevelLinkApi />
			</div>
		);
	}
}
export default Skeleton;
