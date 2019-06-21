/**
 * Question provided from HackerRank
 * Array Manipulation [HARD]
 * https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 *
 * Determine the largest number in array after the queries are added in elements [a,b]
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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  let arr = [];
  let currentVal = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  for (let j = 0; j < queries.length; j++) {
    arr[queries[j][0] - 1] += queries[j][2];
    if (queries[j][1] < arr.length) {
      arr[queries[j][1]] -= queries[j][2];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    currentVal += arr[i];
    max = Math.max(max, currentVal);
  }

  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nm = readLine().split(" ");

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine()
      .split(" ")
      .map(queriesTemp => parseInt(queriesTemp, 10));
  }

  let result = arrayManipulation(n, queries);

  ws.write(result + "\n");

  ws.end();
}
