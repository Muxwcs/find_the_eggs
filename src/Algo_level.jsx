function matchRarity(algoPower = 0){
    return {
        "basic" : algoPower + 1,
        "junk" : algoPower + 2,
        "fine" : algoPower + 3,
        "ascended" : algoPower + 4,
        "exotic" : algoPower + 7,
        "rare" : algopower +8,
        "masterwork" : algopower + 9,
        "legendary" : algopower + 10,
    }
}

 export default function algLevel(rarity, algoPower = 0){
    matchRarity(algoPower)[rarity];
}
