import { API, getJSON } from "./api"

const fetch = async () => {
  console.log(3)
  return await getJSON(API.profile)
}

export default { fetch }