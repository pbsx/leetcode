/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])

    let c = 1
    let end = points[0][1]

    points.forEach((p) => {
        if (p[0] <= end) {
            end = Math.min(end, p[1])
        } else {
            c++
            end = p[1]
        }
    })

    return c
};