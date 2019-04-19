import React from "react";
import "../skeleton.module.css";

function shuffleArray(array) {
    array = [];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function GetRandomPosition({ image }) {
    const shuffledPosts = shuffleArray(image);
    return (
        <div>
            {shuffledPosts.map(image => {
                return (
                    <button>
                        <img src={image} alt="lalala" />
                    </button>
                );
            })}
        </div>
    );
}

export default GetRandomPosition;
