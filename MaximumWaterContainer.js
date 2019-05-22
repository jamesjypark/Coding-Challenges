/**
 * Question provided from LeetCode
 * 11. Container With Most Water [MEDIUM]
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * @param {number[]} height
 * @return {number}
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 

Find two lines, which together with x-axis forms a container, 
such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
 */
var maxArea = function(height) {
  var max = 0;
  var temp;
  var front = 0;
  var back = height.length - 1;
  while (front !== back) {
    var temp = (back - front) * Math.min(height[front], height[back]);
    max = Math.max(max, temp);
    if (height[front] > height[back]) {
      back -= 1;
    } else {
      front += 1;
    }
  }
  return max;
};
