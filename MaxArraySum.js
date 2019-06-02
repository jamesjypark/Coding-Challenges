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

function maxSubsetSum(arr) {
  let memo = [];
  return maxSubsetSumRecursive(arr, 0, memo);
}
// Complete the maxSubsetSum function below.
function maxSubsetSumRecursive(arr, index, memo) {
  if (memo[index]) {
    return memo[index];
  }
  if (index >= arr.length) {
    return 0;
  }
  if (index === arr.length - 1) {
    return Math.max(0, arr[index]);
  }
  let val1 = maxSubsetSumRecursive(arr, index + 1, memo);
  let val2 = arr[index] + maxSubsetSumRecursive(arr, index + 2, memo);
  memo[index] = Math.max(val1, val2);
  return Math.max(val1, val2);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const res = maxSubsetSum(arr);

  ws.write(res + "\n");

  ws.end();
}
