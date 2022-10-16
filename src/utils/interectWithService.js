import imageService from "../services/imageService";
import personService from "../services/personService";
import userInfoService from "../services/userInfoService";
import postService from "../services/postService";

const SERVICES = {
  get: {
    personById: personService.fetchOne,
    images: imageService.fetch,
    userInfo: userInfoService.fetch,
    articleById: postService.fetchOne
  },
};

const interectWithService = (resource, method, addition) => {
  const responseData = (async function () {
    if (Array.isArray(addition)) {
      return await Promise.all(addition.map(async item => (await SERVICES[method][resource](item)).data))
    } else {
      return (await SERVICES[method][resource](addition)).data;
    }
  })()
  return responseData
};

export default interectWithService;