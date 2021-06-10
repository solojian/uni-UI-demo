import {getToken,removeToken} from './session.js'

// 检查session_key
 function checkSession() {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success() {
        return resolve(true)
      },
      fail() {
        return resolve(false)
      }
    })
  })
}

// 检测登录状态，返回 true / false
 function checkHasLogined() {
  const token = getToken()
  if (!token) {
    return false
  }
  checkSession().then(res => {
    if (!res) {
      removeToken()
      return false
    }
  })
  return true
}

//获取登录code
 function wxaCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        return resolve(res.code)
      },
      fail() {
        return resolve('获取code失败')
      }
    })
  })
}

// 获取用户信息
 function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res => {
        return resolve(res)
      },
      fail: err => {
        console.error(err)
        return resolve()
      }
    })
  })
}

// 登出
function loginOut() {
  wx.removeStorageSync('token')
  wx.removeStorageSync('uid')
}

module.exports = {
  checkHasLogined: checkHasLogined,
  wxaCode: wxaCode,
  getUserInfo: getUserInfo,
  loginOut: loginOut,
  checkSession: checkSession
}