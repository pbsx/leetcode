/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let i = 0
    let res = []
    const length = intervals.length

    while (i < length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i++
    }

    while (i < length && intervals[i][0] <= newInterval[1]) {
        newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
        i++;
    }

    res.push(newInterval)

    while (i < length) {
        res.push(intervals[i])
        i++
    }

    return res
};