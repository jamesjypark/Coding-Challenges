/**
 * Question provided from HackerRank
 * Tries: Contacts [HARD]
 * https://www.hackerrank.com/challenges/ctci-contacts/problem
 *
 * Add input to an array and determine if find input is subset of any of the elements in the array
 * Used trie structure to implement in linear time instead of exponential
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

// charNode object
function charNode() {
  this.count = 0;
  this.children = new Map();
}

// creates trie
function addWord(node, str) {
  node.count++;
  if (str.length === 0) {
    return;
  }
  if (node.children.has(str[0])) {
    addWord(node.children.get(str[0]), str.slice(1));
  } else {
    let newNode = new charNode();
    node.children.set(str[0], newNode);
    addWord(newNode, str.slice(1));
  }
}

function findSubset(node, str) {
  if (str.length === 0) {
    return node.count;
  }
  if (node.children.has(str[0])) {
    return findSubset(node.children.get(str[0]), str.slice(1));
  } else {
    return 0;
  }
}

function main() {
  const n = parseInt(readLine(), 10);
  let headNode = new charNode();
  for (let nItr = 0; nItr < n; nItr++) {
    const opContact = readLine().split(" ");

    const op = opContact[0];

    const contact = opContact[1];

    if (op === "add") {
      addWord(headNode, contact);
    } else {
      console.log(findSubset(headNode, contact));
    }
  }
}
