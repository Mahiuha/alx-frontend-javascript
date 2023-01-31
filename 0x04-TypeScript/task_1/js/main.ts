interface Teacher {
  // first name of the teacher
  firstName: string;
  // last name of the teacher
  lastName: string;
  // whether the teacher is a full-time employee
  fullTimeEmployee: boolean;
  // years of experience of the teacher
  yearsOfExperience?: number;
  // location of the teacher
  location: string;
  // allow to add any additional attribute to the object
  [key: string]: any;
}

// initialize the first teacher object
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York"
};

// initialize the second teacher object
const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London"
};

// initialize the third teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
};

// print the third teacher object
console.log(teacher3);

