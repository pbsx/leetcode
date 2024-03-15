/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const length = nums.length
    const l = new Array(length).fill(1)
    const r = new Array(length).fill(1)

    let [i, j] = [0, length - 1]

    let leftProd = 1
    let rightProd = 1
    while (i < length && j > -1) {
        l[i] = leftProd
        r[j] = rightProd

        leftProd *= nums[i]
        rightProd *= nums[j]

        i++;
        j--;
    }

    return l.map((ele, i) => ele*r[i])
};