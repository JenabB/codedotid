const students = ["asep", "budi", "charlie", "budi", "jeni", "asep"];

function duplicateElement(array) {
  //reducer
  const reducer = (prevValue, curValue) => ({
    ...prevValue,
    [curValue]: (prevValue[curValue] || 0) + 1,
  });

  //variable output
  const counter = array.reduce(reducer, {});

  return counter;
}

console.log(duplicateElement(students));
