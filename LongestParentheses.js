/**
 * Question provided from LeetCode
 * 32. Longest Valid Parentheses [HARD]
 * https://leetcode.com/problems/longest-valid-parentheses/
 * 
 * @param {string} s
 * @return {number}
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

    Example 1:

    Input: "(()"
    Output: 2
    Explanation: The longest valid parentheses substring is "()"
    Example 2:

    Input: ")()())"
    Output: 4
    Explanation: The longest valid parentheses substring is "()()"
 * 
 */
var longestValidParentheses = function(s) {
  let arr = s.split("");
  let max = 0;
  let stack = [];
  stack.push(-1);
  arr.forEach((element, i) => {
    if (element === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  });
  return max;
};
