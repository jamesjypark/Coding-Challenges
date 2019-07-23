/**
 * Question provided from LeetCode
 * Longest Substring without Repeating Character [MEDIUM]
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * A naive implementation of longest substring function
 * Can be greatly improved using a hashmap and a more clever appraoch :O
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let tempArr = [];
    for (let j = i; j < s.length; j++) {
      if (tempArr.includes(s[j])) {
        break;
      }
      tempArr.push(s[j]);
    }
    max = Math.max(max, tempArr.length);
  }
  return max;
};
