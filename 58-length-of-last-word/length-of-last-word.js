/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim()
    let length = s.length
    let count = 0
    for (let i = length - 1; i >= 0; i--) {
        if (s[i] === " ") return count;
        count++
    }
    return count
};