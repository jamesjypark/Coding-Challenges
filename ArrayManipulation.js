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
const arrayManipulation = (n, queries) => {
  let diffArr = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    let currentQueries = queries[i];
    diffArr[currentQueries[0] - 1] += currentQueries[2];
    if (currentQueries[1] < n) {
      diffArr[currentQueries[1]] -= currentQueries[2];
    }
  }
  let max = 0;
  let currentValue = 0;
  diffArr.forEach(item => {
    currentValue += item;
    max = Math.max(max, currentValue);
  });
  return max;
};

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
