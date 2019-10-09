import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/routes'
import { ROUTER_DEFAULT_CONFIG } from '@/config'
import { routerBeforeEachFunc, routerAfterEachFunc } from '@/config/interceptors'

Vue.use(Router)

// 注入默认配置和路由表
const routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes
})

routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: []
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default routerInstance
