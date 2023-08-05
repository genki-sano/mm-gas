import { AggregatResult } from '@/domains//models/aggregate'
import { USER_TYPE } from '@/domains//models/user/user'
import { Payment } from '@/domains/models/payment'
import { Users } from '@/domains/models/user/users'

export class AggregationService {
  /**
   * 出費を集計する
   */
  public aggregatePayments(payments: Payment[], users: Users): AggregatResult {
    let womanPrice = 0
    let manPrice = 0
    payments.forEach((payment): void => {
      if (payment.name === users.woman.name) {
        womanPrice += payment.price
        return
      }
      if (payment.name === users.man.name) {
        manPrice += payment.price
        return
      }
    })

    // 小数点以下は切り上げ
    const diffPrice = Math.ceil(Math.abs(womanPrice - manPrice) / 2)

    if (womanPrice < manPrice) {
      return new AggregatResult(
        USER_TYPE.woman,
        USER_TYPE.man,
        diffPrice,
        womanPrice,
        manPrice,
      )
    }
    return new AggregatResult(
      USER_TYPE.man,
      USER_TYPE.woman,
      diffPrice,
      womanPrice,
      manPrice,
    )
  }
}
