// clonning object

const employee = {
  firstName: "john",
  lastName: "black",
  salary: 5000,
  portofolio: {
    ipk: 3.45,
    skill: ["java", "oracle"],
  },
};

// older version clonning object
const person = Object.assign({}, employee);

//clonning object menggunakan spread operator
const emps = { ...employee };

//destructure object / extract properties ke variable
const {
  firstName,
  lastName,
  salary,
  portofolio: { ipk, skill },
} = employee;
console.log("firstName  :" + firstName);

console.log();
