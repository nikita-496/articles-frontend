import React, { useEffect } from 'react';
import { useState } from 'react';
import CustomTabs from '../../components/customMUI/customTabs/CustomTabs';
import useApi from '../../hooks/useApi';
import usePersonInfo from '../../hooks/usePersonInfo';
import useSeparate from '../../hooks/useSeparate';
import formatArticleText from '../../utils/formatArticleText';
import Article from './Article';


function createMarkup(toParse) {
  return { __html: toParse };
}

const ArticleBody = (props) => {
  const separateChapter = useSeparate(props.content);

  return (
    <article>
      {separateChapter.length ? (
        separateChapter.map((item, i) => (
          <div key={i} id={`part-${[i]}`} dangerouslySetInnerHTML={createMarkup(item)}></div>
        ))
      ) : (
        <p>Нет данных</p>
      )}
    </article>
  );
};

const ArticleContaier = () => {
  const [article, setArticle] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(0);

  const id = document.location.pathname.split('/')[2];

  const articleOptions = [['articleById', 'get', id]];

  const { data: responseArticleData, isLoading, isError } = useApi(articleOptions);

  // toDo: заменить значение-заглушку (13)
  const { pesonInfo: author } = usePersonInfo(responseArticleData ? responseArticleData[0].user_id : 13);

  useEffect(() => {
    if (responseArticleData) {
      let data = [...responseArticleData];
      data = formatArticleText(data);
      setArticle(data);
    }
  }, [responseArticleData]);
  return (
    <>
      {article[0] && responseArticleData && author ? (
        <Article
          tabs={<CustomTabs text={responseArticleData[0].content} chapter={currentChapter} />}
          author={{
            avatar: author[0],
            login: author[1].login,
            level: author[2][0].level,
            fullName: `${author[1].name} ${author[1].surname}`,
          }}
          title={article[0].title}
          body={<ArticleBody content={responseArticleData[0].content} />}
        ></Article>
      ) : null}
    </>
  );
};

export default ArticleContaier;
