/**
 * Question provided from HackerRank
 * Minimum Swaps2 [MEDIUM]
 * https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * Determine the minimum number of swaps to make the array in ascending order
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

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let count = 0;
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let correctIndex = hashMap.get(i + 1);
      hashMap.set(arr[i], correctIndex);
      arr[correctIndex] = arr[i];
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const res = minimumSwaps(arr);

  ws.write(res + "\n");

  ws.end();
}
