import { IPaymentGateway } from '@/applications/gateways/spreadsheet/payment'
import { Payment } from '@/domains/models/payment'
import { Users } from '@/domains/models/user/users'
import { SpreadsheetClient } from '@/infrastructures/spreadsheet/spreadsheet'
import { formatMonth } from '@/utils'

export class PaymentGateway implements IPaymentGateway {
  private readonly ss: SpreadsheetClient

  constructor(ss: SpreadsheetClient) {
    this.ss = ss
  }

  /**
   * @inheritdoc
   */
  public getInTargetMonth(date: Date, users: Users): Payment[] {
    const sheet = this.ss.newSheet(formatMonth(date, '-'))
    if (!sheet) {
      return []
    }

    const startRow = 1
    const startColumn = 1
    const lastRow = sheet.getLastRow()
    const lastColumn = sheet.getLastColumn()

    if (lastRow < startRow || lastColumn < startColumn) {
      return []
    }

    const values = sheet.getRecordValues(
      startRow,
      startColumn,
      lastRow,
      lastColumn,
    )

    return values.map(
      (value) =>
        new Payment(
          value[0],
          users.getUserName(parseInt(value[1])),
          value[4],
          value[3],
          value[2],
          value[5] || '',
        ),
    )
  }
}
