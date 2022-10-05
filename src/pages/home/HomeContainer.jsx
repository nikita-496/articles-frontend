import React, { useState } from 'react';
import Home from './Home';
import useArtciles from '../../hooks/useArtciles.js';
import useQueryParams from '../../hooks/useQueryParams';

const HomeContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {queryParams, setQueryParams, page, setPage, sortСriteria, setSortСriteria} = useQueryParams()

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

