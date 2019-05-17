// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let tempNode = new ListNode(0);
  let head = tempNode;
  let isCarryFlag = false;
  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (isCarryFlag) {
      sum += 1;
    }
    if (sum > 9) {
      sum = sum % 10;
      isCarryFlag = true;
    } else {
      isCarryFlag = false;
    }
    tempNode.val = sum;
    if (l1 || l2) {
      tempNode.next = new ListNode(0);
      tempNode = tempNode.next;
    }
  }
  if (isCarryFlag) {
    tempNode.next = new ListNode(1);
  }
  return head;
};
