import { Message } from '@/type/line/message'

export interface ILineClient {
  replyMessage(
    replyToken: string,
    messages: Message | Message[],
    notificationDisabled?: boolean,
  ): void
  pushMessage(
    to: string,
    messages: Message | Message[],
    notificationDisabled?: boolean,
  ): void
}
