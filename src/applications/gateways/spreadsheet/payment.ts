import { Payment } from '@/domains/models/payment'
import { Users } from '@/domains/models/user/users'

export interface IPaymentGateway {
  getInTargetMonth(date: Date, users: Users): Payment[]
}
