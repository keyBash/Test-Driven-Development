const palindromes = function (string) {
    string = string.toLowerCase().replace(/\W/g, '');  
  const stringArray = [...string];
  const newArray = [];
  stringArray.forEach(index => {
    newArray.unshift(index);
  });
  const reversedString = newArray.join('');
  console.log(string);
  return string === reversedString;
};


module.exports = palindromes;


