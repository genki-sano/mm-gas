import { HttpClient } from '@/infrastructures/line/http'
import { Message } from '@/type/line/message'
import { toArray } from '@/utils'

export class LineClient {
  public readonly http: HttpClient

  public constructor(channelAccessToken: string) {
    this.http = new HttpClient({
      Authorization: `Bearer ${channelAccessToken}`,
    })
  }

  public replyMessage(
    replyToken: string,
    messages: Message | Message[],
    notificationDisabled?: boolean,
  ): void {
    const url = 'https://api.line.me/v2/bot/message/reply'
    const body = {
      messages: toArray(messages),
      replyToken,
      notificationDisabled: notificationDisabled ?? false,
    }
    this.http.post(url, body)
  }

  public pushMessage(
    to: string,
    messages: Message | Message[],
    notificationDisabled?: boolean,
  ): void {
    const url = 'https://api.line.me/v2/bot/message/push'
    const body = {
      messages: toArray(messages),
      to,
      notificationDisabled: notificationDisabled ?? false,
    }
    this.http.post(url, body)
  }
}
