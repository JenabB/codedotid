function maxWordLength(text) {
  const textArray = text.split(" ");

  const longest = textArray.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  return longest;
}
console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
