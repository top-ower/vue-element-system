import { importAll } from '@/utils/common'

export default (() => {
  const modulesContext = require.context('./modules', false, /\.js$/)
  return importAll(modulesContext)
})()