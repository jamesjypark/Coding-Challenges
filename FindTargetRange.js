/**
 * Question provided from LeetCode
 * Find First and Last Position of Element in Sorted Array [MEDIUM]
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Find the range of a target number in a sorted array
 */

const binarySearch = (nums, target, low, high) => {
  let middle = Math.round((high + low) / 2);
  if (target === nums[middle]) {
    return middle;
  }
  if (low >= high) {
    return -1;
  }
  if (target > nums[middle]) {
    return binarySearch(nums, target, middle, high);
  }
  if (target < nums[middle]) {
    return binarySearch(nums, target, low, middle - 1);
  }
};

const getRange = (nums, target, targetIndex) => {
  if (targetIndex === -1) {
    return [-1, -1];
  }
  let start = targetIndex;
  let end = targetIndex;
  while (nums[start - 1] === target) {
    start--;
  }
  while (nums[end + 1] === target) {
    end++;
  }
  return [start, end];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let targetIndex = binarySearch(nums, target, 0, nums.length - 1);
  return getRange(nums, target, targetIndex);
};
