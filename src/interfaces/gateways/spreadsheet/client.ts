export interface ISpreadsheetClient {
  /**
   * シートを作成する
   * @see https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet?hl=ja#getSheetByName(String)
   */
  newSheet(name: string): ISheetClient | null
}

export interface ISheetClient {
  /**
   * 最終行数を取得する
   * @see https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet?hl=ja#getLastRow()
   */
  getLastRow(): number

  /**
   * 最終列数を取得する
   * @see https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet?hl=ja#getLastColumn()
   */
  getLastColumn(): number

  /**
   * 指定した範囲の値を取得する
   * @see https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet?hl=ja#getRange(String)
   * @see https://developers.google.com/apps-script/reference/spreadsheet/range?hl=ja#getDisplayValues()
   */
  getRecordValues(
    row: number,
    column: number,
    numRows: number,
    numColumns: number,
  ): string[][]
}
