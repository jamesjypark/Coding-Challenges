/**
 * Question provided from LeetCode
 * Partition List [MEDIUM]
 * https://leetcode.com/problems/partition-list/submissions/
 * Partition the linked list into larger and small numbers than x
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  let curr = head;
  let head1 = new ListNode();
  let head2 = new ListNode();
  let curr1, curr2;
  while (curr) {
    if (curr.val < x) {
      if (curr1) {
        curr1.next = new ListNode();
        curr1 = curr1.next;
        curr1.val = curr.val;
      } else {
        curr1 = head1;
        curr1.val = curr.val;
      }
    } else {
      if (curr2) {
        curr2.next = new ListNode();
        curr2 = curr2.next;
        curr2.val = curr.val;
      } else {
        curr2 = head2;
        curr2.val = curr.val;
      }
    }
    curr = curr.next;
  }
  if (curr1 && curr2) {
    curr1.next = head2;
    return head1;
  } else {
    return head;
  }
};
