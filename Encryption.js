/**
 * Question provided from HackerRank
 * Encryption [MEDIUM]
 * https://www.hackerrank.com/challenges/encryption/problem
 * Encrypt input using grid and row distribution
 */

function encryption(input) {
  const inputLength = input.length;
  const columns = Math.ceil(Math.sqrt(inputLength));
  const grid = new Array(columns);
  for (let i = 0; i < columns; i++) {
    grid[i] = new Array();
  }
  for (let i = 0; i < input.length; i++) {
    grid[i % columns].push(input[i]);
  }
  let encodedStr = grid.map(column => column.join("")).join(" ");
  return encodedStr;
}
