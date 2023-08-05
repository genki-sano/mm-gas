import { OnTimeDrivenUseCase } from '@/applications/usecases/onTimeDriven'
import { AggregationService } from '@/domains/services/aggregation'
import { MessageService } from '@/domains/services/message'
import { Config } from '@/infrastructures/config'
import { LineClient } from '@/infrastructures/line/client'
import { SpreadsheetClient } from '@/infrastructures/spreadsheet/spreadsheet'
import { OnTimeDrivenController } from '@/interfaces/controllers/onTimeDriven'
import { MessageGateway } from '@/interfaces/gateways/line/message'
import { PaymentGateway } from '@/interfaces/gateways/spreadsheet/payment'
import { UserGateway } from '@/interfaces/gateways/spreadsheet/user'

export const makeOnTimeDrivenController = (): OnTimeDrivenController => {
  const config = new Config()
  const ssClient = new SpreadsheetClient(config.spreadsheetId)
  return new OnTimeDrivenController(
    new OnTimeDrivenUseCase(
      new PaymentGateway(ssClient),
      new UserGateway(ssClient),
      new MessageGateway(new LineClient(config.lineChannelAccessToken)),
      new AggregationService(),
      new MessageService(),
    ),
  )
}
