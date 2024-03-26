/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const length = nums.length

    for (let i = 0; i < length; i++) {
        if (nums[i] <= 0) {
            nums[i] = 0;
        }
    }

    function replaceNums(num) {
        if (num < 0 || num > length) return;
        const temp = nums[num - 1];
        nums[num - 1] = -1;
        replaceNums(temp);
    }

    for (let i = 0; i < length; i++) {
        replaceNums(nums[i]);
    }

    for (let i = 0; i < length; i++) {
        if (nums[i] >= 0) {
            return i + 1;
        }
    }

    return length + 1
};

