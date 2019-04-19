import React from "react";

export default function EggRayman({ image, x, y, size }) {
    return <img src={image} alt="lalala" style={{ position: "absolute", height: `${size}px`, top: `${y}px`, left: `${x}px` }} />;
}
