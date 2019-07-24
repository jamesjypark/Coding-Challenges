/**
 * Question provided from LeetCode
 * Longest Substring without Repeating Character [MEDIUM]
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * A O(n) implementation using sliding window algorithm
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let max = 0;
  let i = 0;
  let j = 0;
  let hashMap = new Map();

  while (s[i] && s[j]) {
    if (hashMap.has(s[j])) {
      i = Math.max(hashMap.get(s[j]) + 1, i);
      max = Math.max(max, j - i + 1);
      hashMap.set(s[j], j);
    } else {
      hashMap.set(s[j], j);
      max = Math.max(max, j - i + 1);
    }
    j++;
  }
  return max;
};
