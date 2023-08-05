import { USER_TYPE } from '@/domains/models/user/user'

export class Man {
  public readonly type = USER_TYPE.man
  public readonly name: string
  public readonly lineUserId: string
  public readonly firebaseId: string

  constructor(name: string, lineUserId: string, firebaseId: string) {
    this.name = name
    this.lineUserId = lineUserId
    this.firebaseId = firebaseId
  }
}
