import React from "react";

export default function ImageEgg({ image }) {
	return (
		<div>
			<img src={image} style={{ height: "60vh", marginTop: "30px" }} alt='lalala' />
		</div>
	);
}
