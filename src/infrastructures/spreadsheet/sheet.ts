export class SheetClient {
  private readonly sheet: GoogleAppsScript.Spreadsheet.Sheet

  public constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
    this.sheet = sheet
  }

  public getLastRow(): number {
    return this.sheet.getLastRow()
  }

  public getLastColumn(): number {
    return this.sheet.getLastColumn()
  }

  public getValueLists(
    row: number,
    column: number,
    numRows: number,
    numColumns: number,
  ): string[][] {
    return this.sheet
      .getRange(row, column, numRows, numColumns)
      .getDisplayValues()
  }
}
