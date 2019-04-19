import React from "react";

export default function ImageEgg({ image }) {
	return (
		<div>
			<img src={image} style={{ height: "40vh", marginTop: "30px" }} alt='lalala' />
		</div>
	);
}
