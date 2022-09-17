const { getJSON, API, postJSON } = require('./api')

const fetch = async () => {
  return await getJSON(API.post)
}

const fetchOne = async (id) => {
  return await getJSON(API.post, id)
}

const save = async (data) => {
  postJSON(API.post, data)
}

export default { fetch, fetchOne, save }