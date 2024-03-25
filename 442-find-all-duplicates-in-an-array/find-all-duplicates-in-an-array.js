/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let count = new Array(nums.length + 1).fill(0)

    nums.forEach(num => { count[num] = count[num] + 1 })

    return count.reduce((res, curr, index) => {
        if (curr > 1) {
            res.push(index)
        }
        return res
    }, [])
};