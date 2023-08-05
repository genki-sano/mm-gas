import { OnTimeDrivenUseCase } from '@/applications/usecases/onTimeDriven'

export class OnTimeDrivenController {
  private readonly useCase: OnTimeDrivenUseCase

  constructor(useCase: OnTimeDrivenUseCase) {
    this.useCase = useCase
  }

  public handler(): void {
    this.useCase.execute()
  }
}
