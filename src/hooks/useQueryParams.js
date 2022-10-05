import { useEffect, useState } from "react";

const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState(`page=1&limit=10`)
  const [sortСriteria, setSortСriteria] = useState('Все')

  const [page, setPage] = useState(1)
  
  useEffect(() => {
    //При смене критерия запроса, отображать список найденных статей с первой страницы
    sortСriteria === 'Все' ? setQueryParams(`page=${page}&limit=10`) : setQueryParams(`tag=${sortСriteria}&page=1&limit=10`) 
  }, [page, sortСriteria])

  return {queryParams, setQueryParams, page, setPage, sortСriteria, setSortСriteria}
}

export default useQueryParams;