import getters from './getters'
import { importAll } from '@/utils/common'

export default (() => {
  const modulesContext = require.context('./modules', false, /\.js$/)
  const modules = importAll(modulesContext)
  console.log(modules)
  return { 
  	modules,
  	getters
  }
})()