import Employee, { Contract } from "./Employee.js";

//firstName, lastName, Salary, Skill, Status, Portfolio
const emp1 = new Employee("john", "black", 5000);

//firstName, lastName, Salary, Skill, Status, Portfolio
const emp2 = new Employee(
  "arya",
  "stark",
  4000,
  ["java", "oracle"],
  "Kontrak",
  { ipk: 3.0 }
);

//firstName, lastName, Salary, Skill
const emp3 = new Employee("dian", "kang", 4500, ["c#"]);

//firstName, lastName, Salary, Skill, Status, Portfolio, Extratime
const kontrak1 = new Contract(
  "sule",
  "eman",
  3500,
  ["komedian", "actor"],
  "Kontrak",
  { ipk: 2.0 },
  1000
);

const listEmployee = [emp1, emp2, emp3, kontrak1];

const kontrak = listEmployee.filter((el) => el.status === "Kontrak");
//console.log(kontrak);
console.log(kontrak1.toString());

const totalGaji = listEmployee.reduce((sum, el) => sum + el.salary, 0);
console.log(`Total Gaji = ${totalGaji}`);

console.log();
