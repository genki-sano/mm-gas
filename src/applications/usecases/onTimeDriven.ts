import { IMessageGateway } from '@/applications/gateways/line/message'
import { IPaymentGateway } from '@/applications/gateways/spreadsheet/payment'
import { IUserGateway } from '@/applications/gateways/spreadsheet/user'
import { AggregationService } from '@/domains/services/aggregation'
import { MessageService } from '@/domains/services/message'

export class OnTimeDrivenUseCase {
  private readonly paymentGateway: IPaymentGateway
  private readonly userGateway: IUserGateway
  private readonly messageGateway: IMessageGateway
  private readonly aggregationService: AggregationService
  private readonly messageService: MessageService

  constructor(
    paymentGateway: IPaymentGateway,
    userGateway: IUserGateway,
    messageGateway: IMessageGateway,
    aggregationService: AggregationService,
    messageService: MessageService,
  ) {
    this.paymentGateway = paymentGateway
    this.userGateway = userGateway
    this.messageGateway = messageGateway
    this.aggregationService = aggregationService
    this.messageService = messageService
  }

  public execute(): void {
    const users = this.userGateway.getUsers()

    const date = new Date()
    const lastMonth = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      date.getDate(),
    )
    const payments = this.paymentGateway.getInTargetMonth(lastMonth, users)

    const aggregate = this.aggregationService.aggregatePayments(payments, users)

    const messages = this.messageService.getMonthlyReportMessages(
      aggregate,
      users,
    )

    this.messageGateway.pushMessage(users.woman.lineUserId, messages)
    this.messageGateway.pushMessage(users.man.lineUserId, messages)
  }
}
