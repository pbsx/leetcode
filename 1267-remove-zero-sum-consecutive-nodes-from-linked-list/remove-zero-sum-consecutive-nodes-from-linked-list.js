/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    const dummy = new ListNode(0)
    dummy.next = head
    let prefixSum = 0
    const store = { 0: dummy }
    let current = head

    while (current) {
        prefixSum += current.val;
        if (prefixSum in store) {
            let toDelete = store[prefixSum].next
            let tempSum = prefixSum + toDelete.val
            while (toDelete !== current) {
                delete store[tempSum]
                toDelete = toDelete.next
                tempSum += toDelete.val
            }
            store[prefixSum].next = current.next
        } else {
            store[prefixSum] = current;
        }
        current = current.next;
    }

    return dummy.next;
};