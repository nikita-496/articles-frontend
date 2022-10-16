import React, { useState } from 'react';
import Home from './Home';
import useArtciles from '../../hooks/useArtciles.js';
import useQueryParams from '../../hooks/useQueryParams';
import home from '../../utils/config/queryParams/home';
import usePrevious from '../../hooks/usePrevious';

const HomeContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [sortСriteria, setSortСriteria] = useState(home.sortСriteria);
  const [page, setPage] = useState(home.params[0].value);

  const prevValue = usePrevious(sortСriteria);
  
  const { queryParams, setQueryParams } = useQueryParams(
    home.initialState,
    [home.params[0].name, home.params[1].name],
    [page, home.params[1].value],
    { curValue: sortСriteria, prevValue, set: setSortСriteria }
  );


  const { articles, total, isLoading, error } = useArtciles(queryParams);

  function filterArticles() {
    if (searchQuery) {
      const regexp = new RegExp(`${searchQuery}`, `gi`);
      return articles.filter((item) => item.title.match(regexp));
    }
    return articles;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Home
          articles={filterArticles()}
          page={page}
          setPage={setPage}
          totalArticles={total}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sorted={sortСriteria}
          setSortСriteria={setSortСriteria}
          setQueryParams={setQueryParams}
        />
      )}
    </>
  );
};

export default HomeContainer;
