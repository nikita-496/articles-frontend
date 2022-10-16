import { API, getJSON } from "./api"

const fetch = async () => {
 return await getJSON(API.userInfo)
}

export default { fetch }