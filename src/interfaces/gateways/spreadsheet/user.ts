import { IUserGateway } from '@/applications/gateways/spreadsheet/user'
import { Man } from '@/domains/models/user/man'
import { USER_TYPE } from '@/domains/models/user/user'
import { Users } from '@/domains/models/user/users'
import { Woman } from '@/domains/models/user/woman'
import { SpreadsheetClient } from '@/infrastructures/spreadsheet/spreadsheet'

export class UserGateway implements IUserGateway {
  private readonly ss: SpreadsheetClient

  constructor(ss: SpreadsheetClient) {
    this.ss = ss
  }

  /**
   * @inheritdoc
   */
  public getUsers(): Users {
    const sheet = this.ss.newSheet('users')
    if (!sheet) {
      throw new Error('Not found sheet [SheetName: users]')
    }

    const startRow = 1
    const startColumn = 1
    const lastRow = sheet.getLastRow()
    const lastColumn = sheet.getLastColumn()

    if (lastRow < startRow || lastColumn < startColumn) {
      throw new Error('必要なユーザーが見つかりません。')
    }

    const values = sheet.getRecordValues(
      startRow,
      startColumn,
      lastRow,
      lastColumn,
    )

    let woman
    let man
    values.forEach((value): void => {
      const userType = parseInt(value[0])
      if (userType === USER_TYPE.woman) {
        woman = new Woman(value[1], value[2], value[3])
        return
      }
      if (userType === USER_TYPE.man) {
        man = new Man(value[1], value[2], value[3])
        return
      }
    })

    if (!woman) {
      throw new Error('女性のユーザーが見つかりません。')
    }
    if (!man) {
      throw new Error('男性のユーザーが見つかりません。')
    }

    return new Users(woman, man)
  }
}
