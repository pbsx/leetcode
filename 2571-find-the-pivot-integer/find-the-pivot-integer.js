/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let sum = n * (n + 1) / 2
    let x = parseInt(Math.sqrt(sum))
    return x * x === sum ? x : -1
};