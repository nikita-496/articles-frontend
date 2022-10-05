const set = (key, value) => {
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

const get = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const remove = (key) => {
  localStorage.removeItem(key)
}
export default { set, get, remove }