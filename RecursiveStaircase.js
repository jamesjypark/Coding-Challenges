/**
 * Question provided from HackerRank
 * Recursion: Davis' Staircase [MEDIUM]
 * https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
 *
 * Using memoization and recursion to compute number of paths to n steps
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

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function stepPerms(n, memo) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 4;
  }
  if (!memo[n]) {
    memo[n] =
      stepPerms(n - 1, memo) + stepPerms(n - 2, memo) + stepPerms(n - 3, memo);
  }
  return memo[n];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = parseInt(readLine(), 10);

  for (let sItr = 0; sItr < s; sItr++) {
    const n = parseInt(readLine(), 10);

    const res = stepPerms(n, []);

    ws.write(res + "\n");
  }

  ws.end();
}
