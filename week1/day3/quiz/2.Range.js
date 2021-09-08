function range(a, b) {
  let start = a;
  let stop = b;

  if (typeof b === "undefined") {
    start = 1;
    stop = a;
  }

  let result = [];
  for (let index = start; index <= stop; index++) {
    result.push(index);
  }

  return result;
}

console.log(range(9)); //[1,2,3,4,5,6,7,8,9]
console.log(range(5, 9)); //[5,6,7,8]
