import { MessageModel } from '@/domains/models/message/message'

export interface IMessageGateway {
  /**
   * 応答メッセージを送る
   */
  replyMessage(
    replyToken: string,
    messages: MessageModel[],
    notificationDisabled?: boolean,
  ): void

  /**
   * プッシュメッセージを送る
   */
  pushMessage(
    to: string,
    messages: MessageModel[],
    notificationDisabled?: boolean,
  ): void
}
