/**
 * Question provided from HackerRank
 * Count Triplets [MEDIUM]
 * https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 *
 * Determine all the valid triplets with the ratio difference of r
 * Implementation using hashmap and filter
 */
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function createHashMap(arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) {
      let countArr = hashMap.get(arr[i]);
      countArr.push(i);
    } else {
      hashMap.set(arr[i], [i]);
    }
  }
  return hashMap;
}

function calculateValidCount(currentIndex, firstNum, secondNum, hashMap) {
  let firstArr = hashMap.get(firstNum).filter(index => index > currentIndex);
  let secondArr = hashMap.get(secondNum).filter(index => index > currentIndex);
  return firstArr.length * secondArr.length;
}
// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let count = 0;
  let hashMap = createHashMap(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let firstNum = hashMap.get(arr[i] * r);
    let secondNum = hashMap.get(arr[i] * r * r);
    if (firstNum && secondNum) {
      let firstNumLength = firstNum.filter(index => index > i).length;
      let secondNumLength = secondNum.filter(index => index > i).length;
      count += firstNumLength * secondNumLength;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + "\n");

  ws.end();
}
