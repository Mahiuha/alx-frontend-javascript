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

// extend the Teacher interface to create a new interface Directors
interface Directors extends Teacher {
  // number of reports the director manages
  numberOfReports: number;
}

// initialize the first director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  numberOfReports: 10
};

// initialize the second director object
const director2: Directors = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  numberOfReports: 20
};

// print the second director object
console.log(director2);

