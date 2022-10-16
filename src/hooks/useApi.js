import { useEffect, useState } from 'react';
import interectWithService from '../utils/interectWithService';

const useApi = (resource, method, parameters) => {
  //console.log(resource)
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      let response;
      try {
        if (Array.isArray(resource)) {
          const promises = resource.map(async (part) => {
            return await interectWithService(...part);
          });
          response = await Promise.all(promises);
        } else {
          response = await interectWithService(resource, method, parameters);
        }
        setData(response);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(true);
      }
    })();
  }, [parameters, resource?.[1]?.[2]]);

  return { data, isLoading, isError };
};

export default useApi;
