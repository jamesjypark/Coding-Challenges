// Coding question from HackerRank
// Can be found at https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, scoresCount, alice) {
  let lb = [];
  let output = [];
  let latestInsert = "";
  scores.forEach(item => {
    if (latestInsert !== item) {
      lb.push(item);
      latestInsert = item;
    }
  });
  // determine position of item in lb
  let lbLength = lb.length - 1;
  alice.forEach(item => {
    while (item >= lb[lbLength]) {
      lbLength = lbLength - 1;
    }
    output.push(lbLength + 2);
  });
  return output;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine()
    .split(" ")
    .map(aliceTemp => parseInt(aliceTemp, 10));

  let result = climbingLeaderboard(scores, scoresCount, alice);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
