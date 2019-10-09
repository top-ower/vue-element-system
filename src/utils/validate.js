
export const isvalidUsername = (str) => {
  let reg = /(^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$)|(^(13[0-9]|15[012356789]|17[01356789]|18[0-9]|14[579])[0-9]{8}$)/;
  return reg.test(str);
}

/**
 * 判断是否为空
*/
export const validateNull = (val) => {
  if (typeof val === 'boolean') {
    return false
  }
  if (val instanceof Array) {
    return val.length === 0
  }
  if (val instanceof Object) {
    return JSON.stringify(val) === '{}'
  }
  return val === 'null' || val == null || val === 'undefined' || val == undefined || val === ''
}