/**
 * Question provided from LeetCode
 * Trapping Rain Water [HARD]
 * https://leetcode.com/problems/trapping-rain-water/
 * Determine the rain water trapped by elevation map
 */
const findRightIndex = (arr, leftIndex, height) => {
  let index = leftIndex + 1;
  while (index < arr.length) {
    if (arr[index] >= height) {
      return index;
    }
    index++;
  }
  return -1;
};

const findHighestIndex = (arr, leftIndex) => {
  let maxHeight = 0;
  let rightIndex = arr.length - 1;
  for (let i = leftIndex + 1; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i];
      rightIndex = i;
    }
  }
  return {
    maxHeight,
    rightIndex
  };
};

const calculateWater = (arr, leftIndex, rightIndex, height) => {
  let area = 0;
  for (let i = leftIndex + 1; i < rightIndex; i++) {
    if (arr[i] < height) {
      area += height - arr[i];
    }
  }
  return area;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let area = 0;
  while (leftIndex < arr.length - 1) {
    rightIndex = findRightIndex(arr, leftIndex, arr[leftIndex]);
    if (rightIndex !== -1) {
      area += calculateWater(arr, leftIndex, rightIndex, arr[leftIndex]);
      leftIndex = rightIndex;
    } else {
      let nextHeight = findHighestIndex(arr, leftIndex);
      area += calculateWater(
        arr,
        leftIndex,
        nextHeight.rightIndex,
        nextHeight.maxHeight
      );
      leftIndex = nextHeight.rightIndex;
    }
  }
  return area;
};
