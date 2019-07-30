/**
 * Question provided from LeetCode
 * Letter Combinations [MEDIUM]
 *
 * Determine all letter combinations from a phone dial
 */
/**
 * @param {number} n
 * @return {string[]}
 */

const digitMap = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};
let arr = [];

var letterCombinations = function(digits) {
  arr = [];
  if (digits === "") {
    return [];
  }
  convertLetter("", digits);
  return arr;
};
const convertLetter = (str, digits) => {
  if (digits.length === 0) {
    if (str !== "") {
      arr.push(str);
    }
    return;
  }
  for (let i = 0; i < digitMap[digits[0]].length; i++) {
    convertLetter(str + digitMap[digits[0]][i], digits.slice(1));
  }
};
