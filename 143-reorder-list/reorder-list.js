/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let fast = head
    let slow = head
    let c = 0
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        c++
    }

    let head2 = reverseLinkedList(slow)
    let res = head
    while (head2.next && head.next) {
        let next = head.next
        head.next = new ListNode(head2.val, next)
        head = next
        head2 = head2.next
    }

    console.log(res)

};

function reverseLinkedList(node) {
    let curr = node;
    let prev = null;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}