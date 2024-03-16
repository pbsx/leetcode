/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let prefixSum = { 0: -1 }
    let sum = 0
    let max = 0
    nums.forEach((num, index) => {
        sum = num === 0 ? sum - 1 : sum + 1
        if (sum in prefixSum) {
            max = Math.max(index - prefixSum[sum], max)
        } else {
            prefixSum[sum] = index
        }
    })

    return max
};