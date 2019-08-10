/**
 * Question provided from LeetCode
 * Candy [HARD]
 * https://leetcode.com/problems/candy/
 * Assign candies to children where each child with rating higher than their neighbors get more candies
 */

const distributeCandy = (i, candies, ratings) => {
  if (candies[i - 1]) {
    if (ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  if (candies[i + 1]) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }
};

const candy = ratings => {
  let candies = new Array(ratings.length).fill(1);
  for (let i = 0; i < candies.length; i++) {
    distributeCandy(i, candies, ratings);
  }
  for (let i = candies.length - 1; i >= 0; i--) {
    distributeCandy(i, candies, ratings);
  }
  return candies.reduce((a, b) => a + b);
};
