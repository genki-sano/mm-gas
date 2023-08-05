import type { UserType } from '@/domains/models/user/user'

export class AggregatResult {
  public fromUserType: UserType
  public toUserType: UserType
  public diffPrice: number
  public womanPrice: number
  public manPrice: number

  public constructor(
    fromUserType: UserType,
    toUserType: UserType,
    diffPrice: number,
    womanPrice: number,
    manPrice: number,
  ) {
    this.fromUserType = fromUserType
    this.toUserType = toUserType
    this.diffPrice = diffPrice
    this.womanPrice = womanPrice
    this.manPrice = manPrice
  }
}
