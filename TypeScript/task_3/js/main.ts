/// <reference path='./crud.d.ts' />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// create a row obj
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// insert a row and get the ID
const newRowID: RowID = CRUD.insertRow(row);
// create updatedRow with age = 23
const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
