const TokenKey = 'Token'
const Tel = 'Tel'
const Id = 'Id'
const Name = 'Name'

export function getToken() {
  return wx.getStorageSync(TokenKey)
}
export function setToken(data) {
  return wx.setStorageSync(TokenKey,data)
}
export function removeToken() {
  return wx.removeStorageSync(TokenKey)
}
export function getTel() {
  return wx.getStorageSync(Tel)
}
export function removeTel() {
  return wx.removeStorageSync(Tel)
}
export function setTel(data) {
  return wx.setStorageSync(Tel, data)
}
export function getId() {
  return wx.getStorageSync(Id)
}
export function removeId() {
  return wx.removeStorageSync(Id)
}
export function setId(data) {
  return wx.setStorageSync(Id, data)
}
export function getName() {
  return wx.getStorageSync(Name)
}
export function removeName() {
  return wx.removeStorageSync(Name)
}
export function setName(data) {
  return wx.setStorageSync(Name, data)
}