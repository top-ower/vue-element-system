import * as rules from './rules'

export const ACCOUNT_USER_NAME_VALIDATE = (str) => {
  return rules.ACCOUNT_USER_NAME.test(str)
}