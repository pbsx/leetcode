/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */

const updateCardStore = (store, card, increment) => {
    store[card] = (store[card] || 0) + increment;
    if (store[card] === 0) delete store[card];
}
var isNStraightHand = function (hand, groupSize) {

    if (hand.length % groupSize !== 0) {
        return false
    }
    const store = {};
    hand.forEach(card => updateCardStore(store, card, 1));

    while (Object.keys(store).length > 0) {
        const cards = Object.keys(store).sort((a, b) => parseInt(a) - parseInt(b));
        let card = cards[0];
        for (let i = 0; i < groupSize; i++) {
            if (!store[card]) return false;
            updateCardStore(store, card, -1);
            card++;
        }
    }

    return true;
};

