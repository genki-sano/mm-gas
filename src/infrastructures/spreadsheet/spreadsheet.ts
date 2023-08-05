import { SheetClient } from '@/infrastructures/spreadsheet/sheet'

export class SpreadsheetClient {
  private readonly ss: GoogleAppsScript.Spreadsheet.Spreadsheet

  public constructor(id: string) {
    this.ss = SpreadsheetApp.openById(id)
  }

  public newSheet(name: string): SheetClient | null {
    const sheet = this.ss.getSheetByName(name)
    if (!sheet) {
      return null
    }
    return new SheetClient(sheet)
  }
}
