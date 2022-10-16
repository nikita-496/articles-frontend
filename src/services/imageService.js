import { API, getJSON } from "./api"

const fetch = async (queryParams) => {
  return await getJSON(queryParams ? `${API.image}?${queryParams}` : API.image)
}

export default { fetch }