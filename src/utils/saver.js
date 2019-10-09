/**
 * [nameKey 命名空间]
 * @type {String}
 */
const nameKey = 'win-'

/**
 * [_get 获取 localstroage 值]
 * @param  {[String]}   key [key 值]
 * @return {[All]}       [value 值]
*/
export const get = function (key) {
  var data = JSON.parse(localStorage.getItem(nameKey + key))
  return data && data.data
}

/**
 * [_set 存储 localstroage 值]
 * @param  {[String]}   key   [key 值]
 * @param  {[All]}   value [value 值]
 */
export const set = function (key, value) {
  let data = {
    data: value
  }
  try {
    localStorage.setItem(nameKey + key, JSON.stringify(data))
  } catch (e) {
    console.log(e)
  }
}

/**
 * [_remove 删除内存中的数据]
 * @param  {[Object]}   keys [内存中的 key]
 */
export const remove = function (keys) {
  if (Array.isArray(keys)) {
    keys.map(function(item) {
      localStorage.removeItem(nameKey + item)
    })
  } else if (typeof(keys) === 'string') {
    localStorage.removeItem(nameKey + keys)
  }
}

/**
 * [_clear 清除所有的缓存数据]
*/
export const clear = function () {
  localStorage.clear()
}