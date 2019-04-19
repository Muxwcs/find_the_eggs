import React from "react";

export default function EggRayman({ image, x, y, size, isVisible, onMouseEnter, onMouseLeave, onClick }) {
    return (
        <img
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            src={image}
            alt="lalala"
            style={{ position: "absolute", height: `${size}px`, top: `${y}px`, left: `${x}px`, opacity: isVisible ? "1" : "0" }}
        />
    );
}
