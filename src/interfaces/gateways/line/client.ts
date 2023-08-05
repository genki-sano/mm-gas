import { Message } from '@/type/line/message'

export interface ILineClient {
  /**
   * 応答メッセージを送る
   * @see https://developers.line.biz/ja/reference/messaging-api/#send-reply-message
   */
  replyMessage(
    replyToken: string,
    messages: Message | Message[],
    notificationDisabled?: boolean,
  ): void

  /**
   * プッシュメッセージを送る
   * @see https://developers.line.biz/ja/reference/messaging-api/#send-push-message
   */
  pushMessage(
    to: string,
    messages: Message | Message[],
    notificationDisabled?: boolean,
  ): void
}
