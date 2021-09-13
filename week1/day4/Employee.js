// create class, template untuk mengcreate object employee
export default class Employee {
  constructor(
    firstName,
    lastName,
    salary = 0,
    skill = [],
    status = "Permanent",
    portofolio = { ipk: 1 }
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.skill = skill;
    this.status = status;
    this.portofolio = portofolio;
  }

  // create function di class employee
  toString() {
    return `${this.firstName} ${this.lastName} salary = Rp.${this.salary}`;
  }
}

class Contract extends Employee {
  constructor(
    firstName,
    lastName,
    salary = 0,
    skill = [],
    status = "Permanent",
    portofolio = { ipk: 1 },
    xtratime = 0
  ) {
    super(firstName, lastName, salary, skill, status, portofolio);
    this.xtratime = xtratime;
  }

  toString() {
    return (
      super.toString() +
      ` uang lembur : ${this.xtratime}, total gaji = ${
        this.salary + this.xtratime
      }`
    );
  }
}

export { Contract };

//object instace, emp1 udah di create di memory
/* const emp1 = new Employee("john","black",5000);
const emp2 = new Employee("arya","stark",4000,["java","oracle"],"Kontrak",{ipk:3.00});
const emp3 = new Employee("dian","kang",4500,["c#"]);
const listEmployee = [emp1,emp2,emp3];
console.log(emp1.toString());
console.log(); */
