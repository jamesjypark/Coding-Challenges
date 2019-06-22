/**
 * Question provided from HackerRank
 * Two Strings [EASY]
 * https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps *
 * Determine if the two strings share a subset
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

// Complete the twoStrings function below.
function twoStrings(str1, str2) {
  let included = "NO";
  let str1Map = new Map();
  for (let i = 0; i < str1.length; i++) {
    str1Map.set(str1[i], true);
  }
  for (let j = 0; j < str2.length; j++) {
    if (str1Map.get(str2[j])) {
      return "YES";
    }
  }
  return "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = twoStrings(s1, s2);

    ws.write(result + "\n");
  }

  ws.end();
}
