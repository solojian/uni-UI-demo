const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}


function regexConfig() {
  var reg = {
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
    phone: /^1(3|4|5|7|8)\d{9}$/
  }
  return reg;
}

const promisify = original => {
  return function (opt) {
    return new Promise((resolve, reject) => {
      opt = Object.assign({
        success: resolve,
        fail: reject
      }, opt)
      original(opt)
    })
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getNow = () => {
  var t = new Date()
  var month = t.getMonth() + 1
  var day = t.getDate()
  if(month < 10 && day < 10) {
    return t.getFullYear() + '-0' + month + '-0' + t.getDate()
  }
  if(month < 10) {
    return t.getFullYear() + '-0' + month + '-' + t.getDate()
  }
  if(day < 10) {
    return t.getFullYear() + '-' + month + '-0' + t.getDate()

  }
  return t.getFullYear() + '-' + month + '-' + t.getDate()
}

module.exports = {
  formatTime,
  regexConfig,
  promisify,
  getNow
}
