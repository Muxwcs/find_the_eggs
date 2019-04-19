const rarityMap = {
    basic: 1,
    junk: 2,
    fine: 3,
    ascended: 4,
    exotic: 7,
    rare: 8,
    masterwork: 9,
    legendary: 10
};

export function computHeighFromRarity(rarity) {
    return 130 - rarityMap[rarity] * 10;
}

export function random(min, max) {
    return Math.random() * (max - min) + min;
}
