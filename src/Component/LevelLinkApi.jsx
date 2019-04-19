import React, { Component } from "react";
import Axios from "axios";

import EggRayman from "./EggRayman";
import { random, computHeighFromRarity } from "../Algo_level";

class LevelLinkApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggs: [],
            isLoading: false,
            isError: false
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
                this.setState({ eggs: responses.map(res => res.data), isLoading: false });
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
                {eggs.map(egg => {
                    return <EggRayman image={egg.image} x={random(20, 1000)} y={random(10, 900)} size={computHeighFromRarity(egg.rarity)} />;
                })}
            </div>
        );
    }
}

export default LevelLinkApi;
