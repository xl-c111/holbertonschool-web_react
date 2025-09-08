interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Amy',
  lastName: 'Brown',
  age: 30,
  location: 'Melbourne'
};
const student2: Student = {
  firstName: 'Bill',
  lastName: 'Gates',
  age: 19,
  location: 'Sydney'
};
const studentsList: Student[] = [student1, student2];
