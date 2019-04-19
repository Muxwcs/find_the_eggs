import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home.page";
import Skeleton from "../Skeleton.page";

export default function Routeur() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/level1' component={Skeleton} />
		</Switch>
	);
}
