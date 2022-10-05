const parseInnerTag = (text) => {
  const reqExp = /(<.*?>)/g;
  const result = text.replace(reqExp, ' ');
  return result
}

const formatArticleText = async (articles, isСut = false) => {
  const formattedArticles = [...articles].map(article => ({ ...article, content: parseInnerTag(article.content)}))

  if (isСut) {
    return await Promise.all(formattedArticles
      .map(article => ({ ...article, content: article.content.slice(0, 160) }))
      .map((article) => ({ ...article, title: parseInnerTag(article.title)}))
  )}

  return await Promise.all(formattedArticles
    .map((article) => ({ ...article, title: parseInnerTag(article.title)})))
    .map(((article) => ({ ...article, title: parseInnerTag(article.title)})))
}

export default formatArticleText