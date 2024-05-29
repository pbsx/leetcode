/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const days = prices.length
    let maxArr = new Array(days)
    let minArr = []
    let max = prices[days - 1]
    let min = prices[0]
    for (let day = 0; day < days; day++) {
        min = min > prices[day] ? prices[day] : min
        max = max < prices[days - day - 1] ? prices[days - day - 1] : max
        minArr.push(min)
        maxArr[days - day - 1] = max
    }

    let maxProfit = maxArr[0] - minArr[0]
    for (let day = 1; day < days; day++) {
        const profit = maxArr[day] - minArr[day]
        maxProfit = maxProfit < profit ? profit : maxProfit
    }

    return maxProfit
};