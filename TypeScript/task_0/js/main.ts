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
const table: HTMLTableElement = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

const header = table.createTHead();
const headerRow = header.insertRow();
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
nameHeader.style.border = '1px solid black';
nameHeader.style.padding = '5px';

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '5px';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);

studentsList.forEach((student) => {
  const row = table.insertRow();

  const nameCell = row.insertCell();
  nameCell.textContent = student.firstName;
  nameCell.style.border = '1px solid black';

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(table);
});
