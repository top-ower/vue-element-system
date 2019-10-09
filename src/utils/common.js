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

/**
* 导入XX目录下所有文件默认数据
* 1. store 下模块的default 默认导出的数据（对象）
*  不需要 `import app from './modules/app'`
*  自动导入所有 vuex modules下的文件模块
*  set './app.js' => 'app'
* 2. route 下模块的default 默认导出的数据（数组）
*  不需要 `import a from './modules/a' import a from './modules/b'`
*  自动导入所有路由modules下的文件模块
*  再把a 和 b 合并成一个数组
*/
const fileNameRE = /(^.*\/)|(\.js$)/g
export const importAll = (modulesContext) => {
  const chunks = modulesContext.keys().reduce((chunks, key) => {
    return Object.assign(chunks, { [key.replace(fileNameRE, '')]: modulesContext(key).default })
  }, {})
  const result = Object.keys(chunks).reduce((modules, key) => {
    if (!Array.isArray(chunks[key])) {
      return chunks
    }
    modules.push(...chunks[key])
    return modules
  }, [])
  return result
}