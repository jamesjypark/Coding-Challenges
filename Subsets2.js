/**
 * Question provided from LeetCode
 * Subsets 2 [MEDIUM]
 * https://leetcode.com/problems/subsets-ii/submissions/
 * Determine all the subsets of a given array of ints
 */

const getSubset = (arr, i) => {
  let binary = i.toString(2);
  let binaryArr = binary.split("");
  while (binaryArr.length < arr.length) {
    binaryArr.unshift(0);
  }
  let subset = [];
  for (let i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === "1") {
      subset.push(arr[i]);
    }
  }
  return subset;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let subsetMap = new Map();
  let subsets = [];
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < Math.pow(2, nums.length); i++) {
    let subset = getSubset(sortedNums, i);
    if (!subsetMap.has(JSON.stringify(subset))) {
      subsetMap.set(JSON.stringify(subset), true);
      subsets.push(subset);
    }
  }
  return subsets;
};
