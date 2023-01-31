// create the DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// create the TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// create a class Director that implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

// create a class Teacher that implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

// create a function createEmployee
const createEmployee = (salary: number | string): Director | Teacher => {
  let salaryNumber: number;
  if (typeof salary === "string") {
    salaryNumber = parseInt(salary.slice(1), 10);
  } else {
    salaryNumber = salary;
  }
  if (salaryNumber < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

// test the function
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

