/**
 * Question provided from LeetCode
 * Climbing Stairs [EASY]
 * https://leetcode.com/problems/climbing-stairs/
 * Determine all the possible numbers to climb a flight of stairs of n steps
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  let memo = new Map();
  return climbStairsRecur(n, memo);
};

const climbStairsRecur = (n, memo) => {
  if (memo.has(n)) {
    return memo.get(n);
  }
  if (n <= 2) {
    memo.set(n, n);
    return n;
  }
  count = climbStairsRecur(n - 1, memo) + climbStairsRecur(n - 2, memo);
  memo.set(n, count);
  return count;
};
