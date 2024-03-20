/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let l1 = list1
    l1.next = list1.next
    let l1Head = l1
    let c1 = 1

    while (c1 < a) {
        l1 = l1.next
        list1 = list1.next
        c1++
    }

    while (c1 <= b+1 && list1.next) {
        list1 = list1.next
        c1++
    }

    l1.next = list2


    while (l1.next) {
        l1 = l1.next
    }

    l1.next = list1

    return l1Head
};