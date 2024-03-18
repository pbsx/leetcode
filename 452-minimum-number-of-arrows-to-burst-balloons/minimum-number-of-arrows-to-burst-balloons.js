/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort(sortFn)
    console.log(points)
    let c = null
    let end = points[0][1]

    points.forEach((p) => {
        if (p[0] <= end) {
            end = Math.min(end, p[1])
            if (c === null) c++;
        } else {
            c++
            end = p[1]
        }
    })

    return c
};

const sortFn = (a, b) => {
    if (a[0] < b[0]) {
        return -1
    }

    if (a[0] > b[0]) {
        return 1
    }

    return a[1] - b[1]
}