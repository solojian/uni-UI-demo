const CryptoJS = require('crypto-js')
const signkey = '3d15d32654bc1af61759a3bacbc0c78a'
const ekey = '3d15d32654bc1af61759a3bacbc0c78a'
// const appid = '336abf9e97cd4276bf8aecde9d32ed0a'
const crypto = {
  getSignKey: function() {
    return signkey
  },
  getEKey: function() {
    return ekey
  },
  // getappid: function() {
  //   return appid
  // },
  /**
   * 签名
   * @param content
   * @param signKey
   * @returns {*}
   */
  sign: function(data, signKey) {
    var strs = []
    strs.sort() // 数组排序
    for (var i in data) {
      // eslint-disable-next-line eqeqeq
      if (i == 'sign' || i == 'token' || data[i] == undefined) continue
      strs.push(i + '=' + data[i])
    }
    strs.push('key=' + signKey)
    var str = strs.join('&') // 数组变字符串
    return this.sha1(str).toUpperCase()
  },

  /**
   * 对称 加密
   * @param content
   * @param encryptKey
   */
  encryptByDES: function(data, encryptKey) {
    var keyHex = CryptoJS.enc.Utf8.parse(encryptKey)
    var encrypted = CryptoJS.DES.encrypt(data, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
  },
  /**
   * 对称 解密
   * @param content
   * @param encryptKey
   */
  decryptByDES: function(ciphertext, encryptKey) {
    var keyHex = CryptoJS.enc.Utf8.parse(encryptKey)
    var decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
  },

  /**
   * sha1 加密
   * @param content
   */
  sha1: function(content) {
    return CryptoJS.SHA1(content).toString()
  }
  /**
   * 清理临时变量 以下划线开头
   */
  // cleanEnv: function () {
  //   for (var key in environment) {
  //     //filter,只删除environment的私有属性 && 以"_开头的临时变量
  //     if (environment.hasOwnProperty(key) && key.indexOf("_") === 0) {
  //       postman.clearEnvironmentVariable(key);
  //     }
  //   }
  // },

  // tests 断言
  // assertHasEnv: function (msg, envKey) {
  //   tests[msg] = this.getEnv(envKey) != undefined;
  // }
}
export default crypto
