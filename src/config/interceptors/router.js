import router from '@/routes'
import store from '@/plugins/store'
import NProgress from 'nprogress' // progress bar
import { getToken } from '@/utils/auth'
import { hasToken, noToken } from 'services/route'

export function routerBeforeEachFunc (to, from, next) {
  // 这里可以做页面拦截，比如做权限处理
  // ...
	// start progress bar
  NProgress.start()

  // 设置浏览器标题
  document.title = ''

  // determine whether the user has logged in
  const userToken = getToken()

  if (userToken) {
  	return hasToken(to, from, next)
  }
  return noToken(to, from, next)
}

export function routerAfterEachFunc (to) {
  const prefix = 'vue-template'
  const { title } = to.meta
  document.title = title ? `${prefix} - ${title}` : prefix
  // finish progress bar
  NProgress.done()
}