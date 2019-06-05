/**
 * Question provided from HackerRank
 * Equal [MEDIUM]
 * https://www.hackerrank.com/challenges/equal/problem
 *
 * Determine minimum number of steps for all colleagues to have equal number of chocolates
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

// Complete the equal function below.
function equal(arr) {
  let counts = [];
  let memo = new Map();
  let min = Math.min(...arr);
  for (let j = 0; j < 5; j++) {
    counts[j] = 0;
    for (let i = 0; i < arr.length; i++) {
      counts[j] += diffRounds(arr[i], min - j, memo);
    }
  }
  return Math.min(...counts);
}

function diffRounds(current, min, memo) {
  let id = `${current}/${min}`;
  if (memo.get(id)) {
    return memo.get(id);
  }
  let rounds = 0;
  while (min + 5 <= current) {
    min += 5;
    rounds++;
  }
  while (min + 2 <= current) {
    min += 2;
    rounds++;
  }
  while (min + 1 <= current) {
    min++;
    rounds++;
  }
  memo.set(id, rounds);
  return rounds;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const arr = readLine()
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));

    let result = equal(arr);

    ws.write(result + "\n");
  }

  ws.end();
}
