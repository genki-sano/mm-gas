import { SheetClient } from '@/infrastructures/spreadsheet/sheet'
import { ISpreadsheetClient } from '@/interfaces/gateways/spreadsheet/client'

export class SpreadsheetClient implements ISpreadsheetClient {
  private readonly ss: GoogleAppsScript.Spreadsheet.Spreadsheet

  public constructor(id: string) {
    this.ss = SpreadsheetApp.openById(id)
  }

  /**
   * @inheritdoc
   */
  public newSheet(name: string): SheetClient | null {
    const sheet = this.ss.getSheetByName(name)
    if (!sheet) {
      return null
    }
    return new SheetClient(sheet)
  }
}
