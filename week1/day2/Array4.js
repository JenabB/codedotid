const employees = ["ziva", "tiara", "delta", "gita"];

function searchEmp(array, key) {
  for (let index = 0; index < array.length; index++) {
    if (key === array[index]) {
      return `${key} found in index ${index}`;
    }

    return `${key} is not found`;
  }
}

console.log(searchEmp(employees, "zi"));
console.log(searchEmp(employees, "ziva"));
