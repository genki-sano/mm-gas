import { ISheetClient } from '@/interfaces/gateways/spreadsheet/client'

export class SheetClient implements ISheetClient {
  private readonly sheet: GoogleAppsScript.Spreadsheet.Sheet

  public constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
    this.sheet = sheet
  }

  /**
   * @inheritdoc
   */
  public getLastRow(): number {
    return this.sheet.getLastRow()
  }

  /**
   * @inheritdoc
   */
  public getLastColumn(): number {
    return this.sheet.getLastColumn()
  }

  /**
   * @inheritdoc
   */
  public getRecordValues(
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
