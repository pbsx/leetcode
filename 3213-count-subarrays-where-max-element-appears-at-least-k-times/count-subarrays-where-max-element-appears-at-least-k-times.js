/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let max = Math.max(...nums)
    let [left, right, maxCount, res] = [0, 0, 0, 0]
    let length = nums.length

    while (right < length) {
        k = k - (nums[right] === max ? 1 : 0)
        right++;
        while (k === 0) {
            k = k + (nums[left] === max ? 1 : 0)
            left++;
        }
        res = res + left
    }

    return res
};