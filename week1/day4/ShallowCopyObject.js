// clonning object shallow

const employee = {
  firstName: "john",
  lastName: "black",
  salary: 5000,
  skill: ["java", "oracle", "nodejs"],
};

const programmer = { ...employee };
//terjadi shallow object artinya skill me-refer ke address memory yg sama
// dengan skill di object employee
//programmer.skill[1] = "postgres";

programmer.skill = [...programmer.skill];
programmer.skill[1] = "postgres";

console.log();
