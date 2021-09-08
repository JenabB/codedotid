function isPermute(str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;
  if (str1Length !== str2Length) {
    return false;
  } else {
    const str1Arr = str1.split("").sort().join("");
    const str2Arr = str2.split("").sort().join("");

    return str1Arr === str2Arr;
    // for (let index = 0; index < str1Arr.length; index++) {
    //    console.log(str1Arr);
    // console.log(str2Arr);

    // if (str1Arr[i] !== str2Arr)
    // }
  }
}

console.log(isPermute("aba", "aab")); //true;
console.log(isPermute("aba", "aaba")); //false;
