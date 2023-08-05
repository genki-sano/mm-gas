import { Payment } from '@/domains/models/payment'
import { Users } from '@/domains/models/user/users'

export interface IPaymentGateway {
  /**
   * 指定した日付の月の出費を取得する
   */
  getInTargetMonth(date: Date, users: Users): Payment[]
}
