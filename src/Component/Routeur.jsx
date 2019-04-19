import React from "react";
import { Route, Switch } from "react-router-dom";
import ComponentBackgroundPage from "../ComponentBackgroundPage";

export default function Routeur() {
	return (
		<Switch>
			<Route exact path='/' component={ComponentBackgroundPage} />
			{/* <Route path='/level1' component={} /> */}
		</Switch>
	);
}
