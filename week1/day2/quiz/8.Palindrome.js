function isPalindrome(input) {
  const inputArr = input.toUpperCase().split("");

  for (let index = 0; index < input.length; index++) {
    if (inputArr[index] !== inputArr[inputArr.length - 1 - index]) {
      return "tidak palindrome";
    }

    return "Palindrome";
  }
}

console.log(isPalindrome("kasur ini rUsak")); //true
