/**
 * Question provided from LeetCode
 * Generate Paranthesis [MEDIUM]
 *
 * Determine all possible sets of valid paranthesis with length 2 * n;
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let list = [];
  searchParan("", n, list);
  return list;
};

const searchParan = (str, n, list) => {
  if (isPossiblyValid(str)) {
    if (str.length === 2 * n) {
      if (isValid(str)) {
        list.push(str);
      }
    } else {
      searchParan(str + "(", n, list);
      searchParan(str + ")", n, list);
    }
  }
};

const isValid = str => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

const isPossiblyValid = str => {
  let rightCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      rightCount++;
    }
  }
  return rightCount <= Math.floor(str.length / 2);
};
