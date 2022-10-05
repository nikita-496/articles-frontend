const { getJSON, API, postJSON } = require('./api')

const fetch = async (queryParams) => {
  return await getJSON(queryParams ? `${API.post}?${queryParams}` : API.post)
}

const fetchOne = async (id) => {
  return await getJSON(API.post, id)
}

const save = async (data) => {
  postJSON(API.post, data)
}

export default { fetch, fetchOne, save }