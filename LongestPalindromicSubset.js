/**
 * Question provided from LeetCode
 * 5. Longest Palindromic Substring [MEDIUM]
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * @param {string} s
 * @return {string}
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * Implementation using helper function to compute longest palindrome at each index
 *
 */

const computePalindrome = (i, str) => {
  let ptr1 = i;
  let ptr2 = i;
  while (str[ptr2 + 1] === str[i]) {
    ptr2++;
  }
  while (str[ptr1 - 1] && str[ptr2 + 1] && str[ptr1 - 1] === str[ptr2 + 1]) {
    ptr1--;
    ptr2++;
  }
  return str.slice(ptr1, ptr2 + 1);
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let maxPalindrome = "";
  for (let i = 0; i < s.length; i++) {
    let currPalindrome = computePalindrome(i, s);
    if (currPalindrome.length > maxPalindrome.length) {
      maxPalindrome = currPalindrome;
    }
  }

  return maxPalindrome;
};
