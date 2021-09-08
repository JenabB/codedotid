function isCharsUnique(char) {
  let charArray = {};

  for (let i = 0, len = char.length; i < len; i++) {
    if (charArray[char[i]] != null) {
      charArray[char[i]] = 1;
      return false;
    } else {
      charArray[char[i]] = 0;
    }
  }
  return true;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false, karena a duplikat
