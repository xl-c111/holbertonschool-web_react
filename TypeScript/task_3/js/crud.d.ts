import { RowID, RowElement } from './interface';

/**
 * Insert a new row into the database
 * @param row - the row data (RowElement)
 * @returns a numeric ID for the new row (RowID)
 */
export function insertRow(row: RowElement): RowID;

/**
 * Delete a row from the database
 * @param rowId - the ID of the row to delete (RowID)
 * @returns nothing (void)
 */
export function deleteRow(RowId: number): void;

/**
 * Update an existing row in the database
 * @param rowId - the ID of the row to update (RowID)
 * @param row - the new row data (RowElement)
 * @returns the same rowId (RowID)
 */
export function updateRow(rowId: RowID, row: RowElement): RowID;
