import NProgress from 'nprogress' // progress bar
import store from '@/plugins/store'
import { Message } from 'element-ui'
import { whiteList } from '@/config'

export const goNext = (callback) => {
  callback && callback()
  NProgress.done()
}

/**
* 权限控制(有token的权限处理)
* 1. 用户访问登录页, 默认跳转至首页
* 2. 判断vuex 是否有用户记录信息
* a. 是：不限制页面访问； 
* b. 否： 拉取用户信息和权限信息；重载路由集合和菜单
* c. 步骤b发生异常； 则清空token, 跳转至登录界面
*/
export const hasToken = async(to, from, next) => {
  if (to.path === '/login') {
    // if is logged in, redirect to the home page
    goNext(() => {
      next({ path: '/' })
    })
    return
  }

  // determine whether the user has obtained his permission roles through getInfo
  const userId = store.getters.userId
  if (userId) {
    next()
    return
  }

  try {
    // get user info
    // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
    const { roles } = await store.dispatch('user/getInfo')

    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // hack method to ensure that addRoutes is complete
    // set the replace: true, so the navigation will not leave a history record
    next({ ...to, replace: true })
  } catch (error) {
    // remove token and go to login page to re-login
    await store.dispatch('user/resetToken')
    Message.error(error || 'Has Error')
    goNext(() => {
      next(`/login?redirect=${to.path}`)
    })
  }
}

/**
* 权限控制(没有token的权限处理)
* 1. 白名单里面的路由正常访问
* 2. 其他跳转到登录界面
*/
export const noToken = async(to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    return
  }
  // other pages that do not have permission to access are redirected to the login page.
  goNext(() => {
    next(`/login?redirect=${to.path}`)
  })
}