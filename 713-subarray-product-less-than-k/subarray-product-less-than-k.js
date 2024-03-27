/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0

    let [left, right, count, product] = [0, 0, 0, 1]
    const length = nums.length

    while (right < length) {
        product *= nums[right]
        while (product >= k) {
            product = product / nums[left]
            left++
        }
        count += 1 + (right - left)
        right++
    }

    return count
};