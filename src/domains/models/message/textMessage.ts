import { EmojiModel } from '@/domains/models/message/emoji'
import { IMessageModel } from '@/domains/models/message/message'
import { TextMessage } from '@/type/line/message'
import { toArray } from '@/utils'

export class TextMessageModel implements IMessageModel {
  public readonly type = 'text'
  public readonly text: string
  public readonly emojis: EmojiModel[]

  public constructor(text: string, emojis: EmojiModel | EmojiModel[] = []) {
    this.text = text
    this.emojis = toArray(emojis)
  }

  public toArray(): TextMessage {
    return {
      type: this.type,
      text: this.text,
      emojis: this.emojis.map((emoji) => emoji.toArray()),
    }
  }
}

export const TextMessageBusinessRule = {
  isTextLengthValid(text: string): boolean {
    return text.length >= 0 && text.length <= 5000
  },
  isEmojisLengthValid(emojis: EmojiModel[]): boolean {
    return emojis.length >= 0 && emojis.length <= 20
  },
}
