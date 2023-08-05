import { FlexMessageModel } from '@/domains/models/message/flexMessage'
import { TextMessageModel } from '@/domains/models/message/textMessage'
import { Message } from '@/type/line/message'

export type MessageModel = TextMessageModel | FlexMessageModel

export interface IMessageModel {
  toArray(): Message
}
