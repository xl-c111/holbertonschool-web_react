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

const teacher1: Teacher = {
  firstName: 'Amy',
  lastName: 'Brown',
  fullTimeEmployee: true,
  location: 'Sydney',
  yearsOfExperience: 12
};
const teacher2: Teacher = {
  firstName: 'Bill',
  lastName: 'Gates',
  fullTimeEmployee: true,
  location: 'Melbourne',
  contract: true
};
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return firstName[0] + '. ' + lastName;
};

console.log(printTeacher('John', 'Doe'));

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  constructor(
    private firstName: string,
    private lastName: string
  ) {}

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
const student: StudentClassInterface = new StudentClass('Amy', 'Brown');
console.log(student.displayName());
console.log(student.workOnHomework());
