/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    const length = tickets.length
    let count = 0
    for (let i = 0; i < length; i++) {
        if (i <= k) {
            count += Math.min(tickets[i], tickets[k]);
        } else {
            count += Math.min(tickets[i], tickets[k] - 1);
        }
    }


    return count
};