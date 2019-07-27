/**
 * Question provided from LeetCode
 * 6. ZigZag Conversion [MEDIUM]
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * @param {string} str
 * @param {num} rows
 * @return {string}
 * Given a string s, find the conversion of the character using zigzag scheme
 */

const convert = function(str, rows) {
  let tempStr = str;
  if (rows === 1) {
    return str;
  }
  let positionArr = [];
  for (let i = 0; i < rows; i++) {
    positionArr.push("");
  }
  let positionIndex = 0;
  let increasing = true;
  while (tempStr.length > 0) {
    positionArr[positionIndex] += tempStr[0];
    tempStr = tempStr.slice(1);
    if (increasing) {
      positionIndex++;
    } else {
      positionIndex--;
    }
    if (positionIndex < 0) {
      positionIndex = 1;
      increasing = true;
    } else if (positionIndex > rows - 1) {
      positionIndex = rows - 2;
      increasing = false;
    }
  }
  return positionArr.join("");
};
