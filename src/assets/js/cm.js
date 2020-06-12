/*
 * @Date         : 2020-04-30 10:41:48
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-11 11:40:57
 * @FilePath     : \learnstore\src\assets\js\cm.js
 */
import axios from 'axios'
import QS from 'qs'

// 开发环境
let BASE_URL = '/tsms'
if (process.env.NODE_ENV === 'production') {
  // 生产环境
  BASE_URL = 'http://106.13.31.103:8082/agt-rest/tsms'
}

const obj = {
  // 封装axios
  get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(BASE_URL + url, {
        params: params
      }).then(res => {
        if (res.data.code === 2) {
          // 去登录
          alert(res.data.message)
          obj.getLinkWXUrl()
          return
        }
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(BASE_URL + url, QS.stringify(params))
        .then(res => {
          if (res.data.code === 2) {
            // 去登录
            alert(res.data.message)
            obj.getLinkWXUrl()
            return
          }
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
          reject(err.data)
        })
    })
  },
  // 验证手机号码是否正确
  isMobile (mobile) {
    var patrn = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    if (!patrn.exec(mobile)) { return false }
    return true
  },
  loading (type) {
    // type == 0隐藏,否则显示
    var els = document.getElementsByClassName('wr-toast')
    var len = els.length
    if (type !== 0) {
      // 显示
      if (len) {
        els[0].classList.remove('hidden')
      } else {
        var loadingstr = '<div class="wr-toast" style="top: 45%;"><div class="wr-toast-loading"></div><div class="wr-toast-content">加载中...</div></div>'
        document.body.insertAdjacentHTML('beforeend', loadingstr)
      }
    } else {
      // 隐藏
      if (len) {
        els[0].classList.add('hidden')
      } else {

      }
    }
  }
}
export default obj
