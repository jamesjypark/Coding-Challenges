// Given a binary array, find the maximum number of consecutive 1s in this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var tempMax = 0;
  var tempConsec = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tempConsec += 1;
    } else {
      if (tempConsec > tempMax) {
        tempMax = tempConsec;
        tempConsec = 0;
      } else {
        tempConsec = 0;
      }
    }
  }

  if (tempConsec > tempMax) {
    tempMax = tempConsec;
  }

  return tempMax;
};
