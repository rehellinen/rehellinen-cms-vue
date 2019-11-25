/**
 *  getters.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import { deepTraversalAll } from 'libs/router/utils'

const getters = {
  menus: (state) => state.menus,
  isMenuCollapse: (state) => state.isMenuCollapse,
  leftMenus: (state) => {
    const deep = (config) => {
      if (Array.isArray(config)) {
        return config
          .map(item => deep(item))
          .filter(item => item !== null)
          .sort((a, b) => b.order - a.order)
      }

      if (!config.show) {
        return null
      }

      if (config.children && config.children.length > 0) {
        config.children = config.children
          .map(item => deep(item))
          .filter(item => item !== null)
          .sort((a, b) => b.order - a.order)
        return config
      }

      return config
    }
    return deep(JSON.parse(JSON.stringify(state.menus)))
  },
  // 展开的菜单配置
  plainMenus: (state) => {
    const menus = []
    deepTraversalAll(state.menus, (config) => {
      if (config.show) {
        menus.push(config)
      }
    })
    console.log(menus)
    return menus
  },
  getMenuByPath: (state, getter) => (path) => {
    return getter.plainMenus.find(item => item.path === path)
  }
}

export { getters }
