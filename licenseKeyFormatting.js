/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

const formatString = str => {
  let strArr = str.split("-");
  return strArr.reduce((a, b) => a + b).toUpperCase();
};

var licenseKeyFormatting = function(str, number) {
  let baseString = formatString(str);
  let groupCount = Math.ceil(baseString.length / number);
  let firstGroupLength = baseString.length % number || number;
  let group = [];
  group.push(baseString.slice(0, firstGroupLength));
  let index = firstGroupLength;
  for (let i = 1; i < groupCount; i++) {
    group.push(baseString.slice(index, index + number));
    index += number;
  }
  console.log(group);
  return group.join("-");
};
