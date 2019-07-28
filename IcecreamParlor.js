/* Question provided from Hackerrank
 * Ice Cream Parlor [EASY]
 * https://www.hackerrank.com/challenges/icecream-parlor/problem
 *
 * Find indices of two difference elements leading to the sum provided
 */

function icecreamParlor(m, arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], i);
  }
  for (let i = 0; i < arr.length; i++) {
    const matchIndex = hashMap.get(m - arr[i]);
    if (matchIndex && matchIndex !== i) {
      return [i + 1, matchIndex + 1];
    }
  }
  return [-1, -1];
}
