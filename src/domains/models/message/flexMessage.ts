import { IMessageModel } from '@/domains/models/message/message'
import { FlexContainer, FlexMessage } from '@/type/line/message'

export class FlexMessageModel implements IMessageModel {
  public readonly type = 'flex'
  public readonly altText: string
  public readonly contents: FlexContainer

  public constructor(altText: string, contents: FlexContainer) {
    this.altText = altText
    this.contents = contents
  }

  public toArray(): FlexMessage {
    return {
      type: this.type,
      altText: this.altText,
      contents: this.contents,
    }
  }
}

export const FlexMessageBusinessRule = {
  isAltTextLengthValid(altText: string): boolean {
    return altText.length >= 0 && altText.length <= 400
  },
}
