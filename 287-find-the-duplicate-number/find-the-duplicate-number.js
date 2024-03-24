/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let store = {}

    for (let num of nums) {
        if (num in store) {
            return num
        } else {
            store[num] = 1
        }
    }
};