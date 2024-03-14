/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let count = 0;
    let sum = 0;
    let prefixSum = { 0: 1 };

    for (let num of nums) {
        sum += num;
        if (prefixSum[sum - goal]) {
            count += prefixSum[sum - goal];
        }
        prefixSum[sum] = (prefixSum[sum] || 0) + 1;
    }

    return count;
};
