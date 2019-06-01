/**
 * Question provided from HackerRank
 * Abbreviation [MEDIUM]
 * https://www.hackerrank.com/challenges/abbr/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
 *
 * Implementation using Hashmap and Memoization
 * Determine if the first parameter can be abbreviated to the second parameter
 */

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

function abbreviation(word, abbr) {
  let hashMap = new Map();
  return abbreviationRecursive(word, abbr, hashMap);
}
// Complete the abbreviation function below.
function abbreviationRecursive(word, abbr, map) {
  let isAbbreviation = map.get(`${word}-${abbr}`);
  if (isAbbreviation) {
    return isAbbreviation;
  }
  if (abbr.length === 0) {
    if (includesCaps(word)) {
      map.set(`${word}-${abbr}`, "NO");
      return "NO";
    } else {
      map.set(`${word}-${abbr}`, "YES");
      return "YES";
    }
  }

  if (word.length === 0) {
    map.set(`${word}-${abbr}`, "NO");
    return "NO";
  }

  if (abbr[0] === word[0] || abbr[0] === word[0].toUpperCase()) {
    return abbreviationRecursive(word.slice(1), abbr.slice(1), map);
  }

  if (word[0] === word[0].toUpperCase()) {
    map.set(`${word}-${abbr}`, "NO");
    return "NO";
  } else {
    return abbreviationRecursive(word.slice(1), abbr, map);
  }
}

function includesCaps(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const a = readLine();

    const b = readLine();

    let result = abbreviation(a, b);

    ws.write(result + "\n");
  }

  ws.end();
}
