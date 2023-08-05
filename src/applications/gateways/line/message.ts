import { MessageModel } from '@/domains/models/message/message'

export interface IMessageGateway {
  replyMessage(
    replyToken: string,
    messages: MessageModel[],
    notificationDisabled?: boolean,
  ): void
  pushMessage(
    to: string,
    messages: MessageModel[],
    notificationDisabled?: boolean,
  ): void
}
