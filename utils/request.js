import {getToken} from './session.js'
import encrypt from './encrypt.js'

// const publicUrl = 'https://appapi.fqb.jhhscm.cn'
const publicUrl = 'https://test.app.fqb.jhhscm.cn'
// const publicUrl = 'https://appdev.fqb.jhhscm.cn'

// const publicUrl = 'http://192.168.0.221:8080/'


const timeout = 5000
export { publicUrl }
export default function reqeust(params) {
  if(params.data) {
    const data = encrypt.set(params.data)
    console.log("params", params)
    return new Promise((resolve, reject) => {
      wx.request({
        url: publicUrl + params.url,
        method: params.method || 'get',
        timeout,
        header: {
          token: getToken()
        },
        data: data,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      wx.request({
        url: publicUrl + params.url,
        method: params.method || 'get',
        timeout,
        header: {
          token: getToken()
        },
        data: {},
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })  
  }
}