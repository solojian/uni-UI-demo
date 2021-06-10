import crypto from './crypto'
const encrypt = {
  set: function(data) {
    if (typeof data === 'object') {
      const _sign = crypto.sign(data, crypto.getSignKey())
      const obj = Object.assign(data, { sign: _sign })
      console.log('data',data)
      const _data = crypto.encryptByDES(JSON.stringify(obj), crypto.getEKey())
      return { sign: _sign, data: _data }
    }
  },
  get: function(str) {
    const _data = crypto.decryptByDES(str, crypto.getEKey())
    return JSON.parse(_data)
  }
}

export default encrypt
