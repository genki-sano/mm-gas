import { Man } from '@/domains/models/user/man'
import { USER_TYPE } from '@/domains/models/user/user'
import { Woman } from '@/domains/models/user/woman'

export class Users {
  public readonly woman: Woman
  public readonly man: Man

  constructor(woman: Woman, man: Man) {
    this.woman = woman
    this.man = man
  }

  public getUserName(type: number): string {
    if (type === USER_TYPE.woman) {
      return this.woman.name
    }
    if (type === USER_TYPE.man) {
      return this.man.name
    }
    throw new Error(`不正な値です。[UserType: ${type}]`)
  }
}
