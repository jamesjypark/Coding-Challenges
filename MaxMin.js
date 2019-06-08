/**
 * Question provided from HackerRank
 * Max Min [MEDIUM]
 * https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
 *
 * Determine the minimum difference between the minimum and the maximum of a subset of length k.
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

// Complete the maxMin function below.
function maxMin(k, arr) {
  if (k <= 1 || arr.length <= 1) {
    return 0;
  }
  let sortedArr = arr.sort((a, b) => a - b);
  let minDiff = sortedArr[sortedArr.length - 1] - sortedArr[0];
  let firstPtr = 0;
  for (let i = k - 1; i < sortedArr.length; i++) {
    minDiff = Math.min(minDiff, sortedArr[i] - sortedArr[firstPtr]);
    firstPtr++;
  }
  return minDiff;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const k = parseInt(readLine(), 10);

  let arr = [];

  for (let i = 0; i < n; i++) {
    const arrItem = parseInt(readLine(), 10);
    arr.push(arrItem);
  }

  const result = maxMin(k, arr);

  ws.write(result + "\n");

  ws.end();
}
