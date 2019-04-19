import React, { Component } from "react";
import Axios from "axios";

import EggRayman from "./EggRayman";
import { random, computHeighFromRarity, getScoreFromRarity } from "../Algo_level";

class LevelLinkApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggs: [],
            isLoading: false,
            isError: false,
            score: 0
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const getEggRequests = [
            Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
            Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
            Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
            Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random"),
            Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random")
        ];
        Promise.all(getEggRequests)
            .then(responses => {
                this.setState({
                    eggs: responses.map(res => ({
                        image: res.data.image,
                        x: random(20, window.innerWidth - 130),
                        y: random(20, window.innerHeight - 130),
                        size: computHeighFromRarity(res.data.rarity),
                        isVisible: false,
                        getScoreFromRarity,
                        score: getScoreFromRarity(res.data.rarity)
                    })),
                    isLoading: false
                });
            })
            .catch(() => this.setState({ isError: true, isLoading: false }));
    }
    render() {
        const { eggs, isError, isLoading } = this.state;
        if (isError) {
            return "TOO BAD ! TRY AGAIN...";
        }
        if (isLoading) {
            return "Loading...";
        }

        return (
            <div>
                <h1>Score : {this.state.score}</h1>
                {eggs.map((egg, i) => {
                    return (
                        <EggRayman
                            image={egg.image}
                            x={egg.x}
                            y={egg.y}
                            size={egg.size}
                            isVisible={egg.isVisible}
                            onClick={() => {
                                this.setState({
                                    eggs: eggs.filter((egg, j) => i !== j),
                                    score: this.state.score + egg.score
                                });
                            }}
                            onMouseLeave={() => {
                                const newEgg = {
                                    ...egg,
                                    isVisible: false
                                };
                                this.setState({
                                    eggs: eggs.map((egg, j) => (i === j ? newEgg : egg))
                                });
                            }}
                            onMouseEnter={() => {
                                const newEgg = {
                                    ...egg,
                                    isVisible: true
                                };
                                this.setState({
                                    eggs: eggs.map((egg, j) => (i === j ? newEgg : egg))
                                });
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}

export default LevelLinkApi;
