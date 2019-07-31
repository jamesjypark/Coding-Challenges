/**
 * Question provided from LeetCode
 * 41. First Missing Positive [HARD]
 * https://leetcode.com/problems/first-missing-positive/
 *
 * Find the first missing positive integer from an unsorted array of integers.
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  let referenceArr = [];
  for (let i = 0; i < nums.length + 1; i++) {
    referenceArr.push(i + 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] < nums.length + 1) {
      referenceArr[nums[i] - 1] = -1;
    }
  }
  for (let i = 0; i < referenceArr.length; i++) {
    if (referenceArr[i] !== -1) {
      return referenceArr[i];
    }
  }
};
