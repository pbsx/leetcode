/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let store = {}
    tasks.forEach(task => {
        if (task in store) {
            store[task] = store[task] + 1
        } else {
            store[task] = 1
        }
    })

    let maxFreq = 0;
    let maxFreqCount = 0;

    Object.values(store).forEach(count => {
        if (count > maxFreq) {
            maxFreq = count;
            maxFreqCount = 1;
        } else if (count === maxFreq) {
            maxFreqCount++;
        }
    });

    let idleSlots = (maxFreq - 1) * (n - maxFreqCount + 1);
    let availableTasks = tasks.length - maxFreq * maxFreqCount;
    let idle = Math.max(0, idleSlots - availableTasks);

    return tasks.length + idle;
}