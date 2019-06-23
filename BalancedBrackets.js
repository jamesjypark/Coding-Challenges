/**
 * Question provided from HackerRank
 * Balanced Brackets [MEDIUM]
 * https://www.hackerrank.com/challenges/balanced-brackets/problem
 *
 * Determine if the input string contains valid brackets.
 */

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the isBalanced function below.
function isBalanced(s) {
  let stack = [];
  let leftParan = ["(", "{", "["];
  for (let i = 0; i < s.length; i++) {
    if (leftParan.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return "NO";
      }
      if (!isSameType(s[i], stack.pop())) {
        return "NO";
      }
    }
  }
  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

function isSameType(rightParan, leftParan) {
  if (rightParan === ")" && leftParan === "(") {
    return true;
  }
  if (rightParan === "}" && leftParan === "{") {
    return true;
  }
  if (rightParan === "]" && leftParan === "[") {
    return true;
  }
  return false;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine();

    let result = isBalanced(s);

    ws.write(result + "\n");
  }

  ws.end();
}
