function leftTriangle(rows) {
  let result = "";
  for (let i = rows; i > 0; i--) {
    if (i === rows) {
      result += "*".repeat(i) + "\n";
    } else {
      let empty = rows - i;
      result += " ".repeat(empty) + "*".repeat(i) + "\n";
    }
  }
  return result;
}

console.log(leftTriangle(5));
