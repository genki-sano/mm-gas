import { Emoji } from '@/type/line/message'

export class EmojiModel {
  public readonly index: number
  public readonly productId: string
  public readonly emojiId: string

  public constructor(index: number, productId: string, emojiId: string) {
    this.index = index
    this.productId = productId
    this.emojiId = emojiId
  }

  public toArray(): Emoji {
    return {
      index: this.index,
      productId: this.productId,
      emojiId: this.emojiId,
    }
  }
}
