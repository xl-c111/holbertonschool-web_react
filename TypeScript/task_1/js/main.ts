interface Teacher {
  readonly firstName: string; // can only can set during initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allow extra properties
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return firstName[0] + '. ' + lastName;
};

console.log(printTeacher('John', 'Doe'));
