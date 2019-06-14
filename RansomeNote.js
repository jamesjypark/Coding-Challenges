/**
 * Question provided from HackerRank
 * Ransome Note [EASY]
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 *
 * Determine if the ransom note can be made from the list of words in magazine
 * Effectively solves using hash map
 */

"use strict";

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let magazineMap = new Map();
  let noteMap = new Map();

  magazine.forEach(word => {
    magazineMap.set(word, magazineMap.get(word) + 1 || 1);
  });

  note.forEach(word => {
    noteMap.set(word, noteMap.get(word) + 1 || 1);
  });

  for (const item of noteMap) {
    if (!magazineMap.has(item[0]) || magazineMap.get(item[0]) < item[1]) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

function main() {
  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const magazine = readLine().split(" ");

  const note = readLine().split(" ");

  checkMagazine(magazine, note);
}
