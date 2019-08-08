/**
 * Question provided from LeetCode
 * Merge K Sorted List [HARD]
 * https://leetcode.com/problems/merge-k-sorted-lists/submissions/
 * Merge a list of linked lists
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  let sortedTemp;
  let sortedHead;
  lists = lists.filter(elem => elem);
  while (lists.length) {
    let min = lists[0].val;
    let minIndex = 0;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < min) {
        min = lists[i].val;
        minIndex = i;
      }
    }
    lists[minIndex] = lists[minIndex].next;
    let minNode = new ListNode(min);
    if (!sortedTemp && !sortedHead) {
      sortedTemp = minNode;
      sortedHead = minNode;
    } else {
      sortedTemp.next = minNode;
      sortedTemp = sortedTemp.next;
    }
    lists = lists.filter(elem => elem);
  }
  return sortedHead || null;
};
