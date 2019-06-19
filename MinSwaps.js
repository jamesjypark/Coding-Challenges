/**
 * Question provided from HackerRank
 * New Year Chaos [MEDIUM]
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 *
 * Determine the minimum number of swaps from initial row to end up with current row
 */

"use strict";

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

// Complete the minimumBribes function below.
function minimumBribes(currArr) {
  let count = 0;
  let tempCount = 0;
  for (let i = 0; i < currArr.length; i++) {
    for (let j = i + 1; j < currArr.length; j++) {
      if (currArr[j] < currArr[i]) {
        tempCount++;
        if (tempCount > 2) {
          console.log("Too chaotic");
          return;
        }
      }
    }
    count += tempCount;
    tempCount = 0;
  }
  console.log(count);
}
function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(" ")
      .map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
