/**
 * Question provided from LeetCode
 * Swap Node in Pairs [MEDIUM]
 * https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
 * Swap each pair of nodes from provided linked list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swapPairArr = arr => {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 === 0) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
};

var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  swapPairArr(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i + 1];
  }
  return arr[0];
};
