export const USER_TYPE = {
  woman: 1,
  man: 2,
} as const

export type UserType = (typeof USER_TYPE)[keyof typeof USER_TYPE]
