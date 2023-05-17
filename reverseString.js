const reverseString = function (word) {
  let rev = word.split("").reverse().join("");
  return rev;
};

module.exports = reverseString;
