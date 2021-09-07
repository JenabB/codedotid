//copy array

const employees = ["ziva", "tiara", "delta", "gita"];

//same references
const empsAll = employees;

employees.push("iqbal");

//copy array
const permanent = Array.of(employees);

const freelance = ["dian", "budi"];

//concat array || menggabungkan
const contractEmps = permanent.concat(freelance);

//empty array
contractEmps.length = 0;
