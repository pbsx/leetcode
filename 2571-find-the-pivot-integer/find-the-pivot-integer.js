/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let rightSum = 0
    let leftSum = (n * (n + 1)) / 2
    while (n) {
        rightSum += n
        if (leftSum === rightSum) {
            return n
        }
        leftSum -= n
        n--
    }

    return -1
};