/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = s.length
    let count = 0
    let j = length - 1
    while (s[j] === ' ') j--
    for (let i = j; i >= 0; i--) {
        if (s[i] === " ") return count;
        count++
    }
    return count
};