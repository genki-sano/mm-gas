import { Users } from '@/domains/models/user/users'

export interface IUserGateway {
  /**
   * ユーザーを取得する
   */
  getUsers(): Users
}
