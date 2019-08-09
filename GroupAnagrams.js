/**
 * Question provided from LeetCode
 * Group Anagrams [MEDIUM]
 * https://leetcode.com/problems/group-anagrams/
 * Group strings into an array of anagrams
 */

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Map = {};
  let str2Map = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Map[str1[i]]) {
      str1Map[str1[i]] += 1;
    } else {
      str1Map[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2Map[str2[i]]) {
      str2Map[str2[i]] += 1;
    } else {
      str2Map[str2[i]] = 1;
    }
  }
  let isSame = true;
  Object.keys(str1Map).forEach(key => {
    if (str1Map[key] !== str2Map[key]) {
      isSame = false;
    }
  });
  return isSame;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let groups = [];
  for (let i = 0; i < strs.length; i++) {
    let inserted = false;
    for (let j = 0; j < groups.length; j++) {
      if (isAnagram(strs[i], groups[j][0])) {
        inserted = true;
        groups[j].push(strs[i]);
        continue;
      }
    }
    if (!inserted) {
      groups.push([strs[i]]);
    }
  }
  return groups;
};
