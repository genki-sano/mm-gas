import { IMessageGateway } from '@/applications/gateways/line/message'
import { IUserGateway } from '@/applications/gateways/spreadsheet/user'
import { AggregationService } from '@/domains/services/aggregation'
import { MessageService } from '@/domains/services/message'
import { PaymentService } from '@/domains/services/payment'

export class OnTimeDrivenUseCase {
  private readonly userGateway: IUserGateway
  private readonly messageGateway: IMessageGateway
  private readonly paymentService: PaymentService
  private readonly aggregationService: AggregationService
  private readonly messageService: MessageService

  constructor(
    userGateway: IUserGateway,
    messageGateway: IMessageGateway,
    paymentService: PaymentService,
    aggregationService: AggregationService,
    messageService: MessageService,
  ) {
    this.paymentService = paymentService
    this.userGateway = userGateway
    this.messageGateway = messageGateway
    this.aggregationService = aggregationService
    this.messageService = messageService
  }

  /**
   * 前月の値を集計して、月次精算レポートを送信する
   */
  public execute(): void {
    const users = this.userGateway.getUsers()

    // 先月の集計をしたいので、１ヶ月前の出費を取得
    const payments = this.paymentService.getInTargetMonth(1, users)
    // 出費を集計して、いくらの受け渡しが必要か算出
    const aggregatedResult = this.aggregationService.aggregatePayments(
      payments,
      users,
    )
    // メッセージの整形
    const messages = this.messageService.getMonthlyReportMessages(
      aggregatedResult,
      users,
    )

    // ２人に同じメッセージを送信
    this.messageGateway.pushMessage(users.woman.lineUserId, messages)
    this.messageGateway.pushMessage(users.man.lineUserId, messages)
  }
}
