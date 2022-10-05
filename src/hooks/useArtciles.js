import { useEffect, useState } from "react";
import formatArticleText from "../utils/formatArticleText";
import postService from '../services/postService'

const useArtciles = (queryParams) => {
  const [articles, setArticles] = useState([])
  const [total, setTotal] = useState(0)
  const [totalByTag, setTotalByTag] = useState(0)

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();



  useEffect(() => {
    (async function () {
      try {
        const responseData = (await postService.fetch(queryParams)).data;
        const articlesReceived = responseData.items
        const formattedArticles = await formatArticleText(articlesReceived, true)
        
        setArticles(formattedArticles);

        setTotal(responseData.total)
        setTotalByTag(responseData.totalByTag)

        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, [queryParams])
  return {articles, setArticles, total: totalByTag ? totalByTag : total, isLoading, error};
}

export default useArtciles;