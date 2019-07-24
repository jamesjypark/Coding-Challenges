/**
 * Question provided from LeetCode
 * Two Sum [EASY]
 * https://leetcode.com/problems/two-sum/
 * Determine the indices of two numbers in array that will sum to target
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (hashMap.has(difference) && hashMap.get(difference) !== i) {
      return [i, hashMap.get(difference)];
    }
  }
};
