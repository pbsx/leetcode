/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let right = nums.length - 1
    let left = 0
    if (left === right) {
        return left
    }
    while (left <= right) {
        let length = right - left + 1
        if (length === 1) {
            return left
        }
        let mid = Math.floor(left + (right - left + 1) / 2)

        switch (mid) {
            case left: return nums[left] > nums[left + 1] ? left : left + 1
            case right: return nums[right] > nums[right - 1] ? right : right - 1
            default: {
                if ((nums[mid] > nums[mid - 1]) && (nums[mid] > nums[mid + 1])) {
                    return mid
                }
                if (nums[mid] < nums[mid + 1]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
        }
    }
};