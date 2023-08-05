import { IMessageGateway } from '@/applications/gateways/line/message'
import { MessageModel } from '@/domains/models/message/message'
import { ILineClient } from '@/interfaces/gateways/line/client'

export class MessageGateway implements IMessageGateway {
  private readonly client: ILineClient

  constructor(client: ILineClient) {
    this.client = client
  }

  /**
   * @inheritdoc
   */
  public replyMessage(
    replyToken: string,
    messages: MessageModel[],
    notificationDisabled?: boolean,
  ): void {
    return this.client.replyMessage(
      replyToken,
      messages.map((msg) => msg.toArray()),
      notificationDisabled,
    )
  }

  /**
   * @inheritdoc
   */
  public pushMessage(
    to: string,
    messages: MessageModel[],
    notificationDisabled?: boolean,
  ): void {
    return this.client.pushMessage(
      to,
      messages.map((msg) => msg.toArray()),
      notificationDisabled,
    )
  }
}
