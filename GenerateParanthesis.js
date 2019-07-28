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
let arr = [];

const isValid = (str, max) => {
  let stack = [];
  let leftCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
      leftCount++;
      if (leftCount > max / 2) {
        return false;
      }
    }
    if (str[i] === ")") {
      if (!stack.pop()) {
        return false;
      }
    }
  }
  return true;
};

const DFS = (str, max) => {
  if (str.length >= max) {
    arr.push(str);
    return;
  }
  if (isValid(str + "(", max)) {
    DFS(str + "(", max);
  }
  if (isValid(str + ")", max)) {
    DFS(str + ")", max);
  }
};

const generateParenthesis = n => {
  DFS("", 2 * n);
  return arr;
};
