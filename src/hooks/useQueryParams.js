import { useEffect, useState } from 'react';

function bySort(initialState, sortСriteria, string, setQueryParams) {
  const conditions = {
    criterionСhange:
      (typeof sortСriteria.prevValue === 'string') &
      (sortСriteria.curValue !== sortСriteria.prevValue),
    specificArticle: sortСriteria.curValue !== 'Все',
  };

  string = conditions.specificArticle ? `tag=${sortСriteria.curValue}&${string}` : string;
  setQueryParams(
    //При смене критерия запроса, отображать список найденных статей с первой страници
    conditions.criterionСhange & conditions.specificArticle
      ? `tag=${sortСriteria.curValue}&${initialState}`
      : string
  );
}

const useQueryParams = (initialState, nameParams, valueParams, sortСriteria) => {
  const [queryParams, setQueryParams] = useState(initialState);

  useEffect(() => {
    let string = `${nameParams[0]}=${valueParams[0]}&${nameParams[1]}`;

    if (sortСriteria) {
      bySort(initialState, sortСriteria, `${string}=${valueParams[1]}`, setQueryParams);
    } else if (Array.isArray(valueParams[1])) {
      const identifiers = valueParams[1]; 
      const resultingStrings = identifiers.map((id) => `${string}=${id}`);
      setQueryParams(resultingStrings);
    } else {
      setQueryParams(`${string}=${valueParams[1]}`);
    }
  }, [valueParams[0], valueParams[1], sortСriteria ? sortСriteria.curValue : null]);

  return { queryParams,  setQueryParams};
};

export default useQueryParams;
