/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0]
    let profit = 0

    const totalDays = prices.length
    for (let i = 1; i < totalDays; i++) {
        profit = Math.max(profit, prices[i] - buy)
        buy = Math.min(buy, prices[i])
    }
    return profit
};