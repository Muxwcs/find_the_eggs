import React, { Component } from "react";
import Axios from "axios";

import EggRayman from "./EggRayman";
import { random, computHeighFromRarity } from "../Algo_level";

class LevelLinkApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgEgg: [],
            isLoading: false,
            isError: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random")
            .then(res => {
                this.setState({ imgEgg: res.data, isLoading: false });
            })
            .catch(() => this.setState({ isError: true, isLoading: false }));
    }
    render() {
        const { imgEgg, isError, isLoading } = this.state;
        if (isError) {
            return "TOO BAD ! TRY AGAIN...";
        }
        if (isLoading) {
            return "Loading...";
        }
        return (
            <div>
                <EggRayman
                    image="https://a9effd958e0dc59aaf3b-80520a33cc33a15351bd958c9b8ecc55.ssl.cf2.rackcdn.com/one-step/graphic-egg.png"
                    x={random(20, 1000)}
                    y={random(10, 1000)}
                    size={computHeighFromRarity("legendary")}
                />
            </div>
        );
    }
}

export default LevelLinkApi;
