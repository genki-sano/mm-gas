import { IPaymentGateway } from '@/applications/gateways/spreadsheet/payment'
import { Users } from '@/domains/models/user/users'

export class PaymentService {
  private readonly paymentGateway: IPaymentGateway

  constructor(paymentGateway: IPaymentGateway) {
    this.paymentGateway = paymentGateway
  }

  /**
   * 指定された数前の月における１ヶ月間の出費を取得する
   */
  public getInTargetMonth(beforeCnt: number, users: Users) {
    const now = new Date()
    const tagetMonth = new Date(
      now.getFullYear(),
      now.getMonth() - beforeCnt,
      1,
    )
    return this.paymentGateway.getInTargetMonth(tagetMonth, users)
  }
}
