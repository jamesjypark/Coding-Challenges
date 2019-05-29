/**
 * Question provided from HackerRank
 * The Coin Change Problem [MEDIUM]
 * https://www.hackerrank.com/challenges/coin-change/problem
 *
 * Find all possible combinations of change on a given amount using dynamic programming
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

function getWays(amount, coins) {
  let map = new Map();
  return getWaysRecur(amount, coins, map);
}
// Complete the getWays function below.
function getWaysRecur(amount, coins, map) {
  if (coins.length === 1) {
    if (amount % coins[0] === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  let key = `${amount}/${coins}`;
  if (map.get(key)) {
    return map.get(key);
  }
  let amountWithCoins = 0;
  let ways = 0;
  while (amountWithCoins <= amount) {
    ways += getWaysRecur(amount - amountWithCoins, coins.slice(1), map);
    amountWithCoins += coins[0];
  }
  map.set(key, ways);
  return ways;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nm = readLine().split(" ");

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  const c = readLine()
    .split(" ")
    .map(cTemp => parseInt(cTemp, 10));

  // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

  let ways = getWays(n, c);
  process.stdout.write(`${ways}`);
  ws.end();
}
