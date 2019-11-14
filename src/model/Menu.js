/**
 *  Menu.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:34
 */
import { BaseModel } from './BaseModel'

export class Menu extends BaseModel {
  constructor () {
    super('menu')
  }

  // TODO: MOCK
  getMock () {
    return this.request({
      url: 'mock/menu.json'
    })
  }

  getLeftMenu () {
    return this.request({
      url: 'mock/left_menu.json'
    })
  }
}