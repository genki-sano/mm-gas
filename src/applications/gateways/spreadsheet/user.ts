import { Users } from '@/domains/models/user/users'

export interface IUserGateway {
  getUsers(): Users
}
