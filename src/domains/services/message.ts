import { AggregatResult } from '@/domains/models/aggregate'
import { FlexMessageModel } from '@/domains/models/message/flexMessage'
import { MessageModel } from '@/domains/models/message/message'
import { Users } from '@/domains/models/user/users'
import { FlexContainer } from '@/type/line/message'
import { numberWithDelimiter } from '@/utils'

export class MessageService {
  /**
   * 月次精算レポートを作成
   */
  public getMonthlyReportMessages(
    result: AggregatResult,
    users: Users,
  ): MessageModel[] {
    const altText = '先月の精算をしてね！'
    const contents: FlexContainer = {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'FROM（支払う人）',
                color: '#ffffff88',
                size: 'sm',
              },
              {
                type: 'text',
                text: users.getUserName(result.fromUserType),
                color: '#ffffff',
                size: 'xl',
                flex: 4,
                weight: 'bold',
              },
            ],
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'TO（貰える人）',
                color: '#ffffff88',
                size: 'sm',
              },
              {
                type: 'text',
                text: users.getUserName(result.toUserType),
                color: '#ffffff',
                size: 'xl',
                flex: 4,
                weight: 'bold',
              },
            ],
          },
        ],
        paddingAll: '20px',
        backgroundColor: '#1DB446',
        spacing: 'md',
        paddingTop: '22px',
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '先月分の精算をしてね！',
            color: '#aaaaaa',
            size: 'sm',
          },
          {
            type: 'text',
            text: `${numberWithDelimiter(result.diffPrice)}円`,
            weight: 'bold',
            size: '3xl',
            color: '#1DB446',
          },
          {
            type: 'separator',
            margin: 'xxl',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'xxl',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: users.woman.name,
                    color: '#aaaaaa',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${numberWithDelimiter(result.womanPrice)}円`,
                    align: 'end',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: users.man.name,
                    color: '#aaaaaa',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${numberWithDelimiter(result.manPrice)}円`,
                    align: 'end',
                  },
                ],
              },
            ],
          },
        ],
      },
    }

    return [new FlexMessageModel(altText, contents)]
  }
}
