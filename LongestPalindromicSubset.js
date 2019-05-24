/**
 * Question provided from LeetCode
 * 5. Longest Palindromic Substring [MEDIUM]
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * @param {string} s
 * @return {string}
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Solution algorithm adapted from jinwu's Java Solution for better performance
 */

let start = 0,
  maxLength = 0;

longestPalindrome = s => {
  if (s.length < 2) {
    return s;
  }

  for (let i = 0; i < s.length - 1; i++) {
    expandPalindrome(s, i, i);
    expandPalindrome(s, i, i + 1);
  }
  console.log(`start: ${start}`);
  console.log(`maxLength: ${maxLength}`);
  return s.slice(start, start + maxLength);
};

expandPalindrome = (str, i, j) => {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i--;
    j++;
  }
  if (j - i > maxLength + 1) {
    start = i + 1;
    maxLength = j - i - 1;
  }
};
