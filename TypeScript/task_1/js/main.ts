interface Teacher {
  readonly firstName: string; // can only can set during initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allow extra properties
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
