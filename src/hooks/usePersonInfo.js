import { useEffect, useState } from 'react';
import profile from '../utils/config/queryParams/profile';
import staticPathGeneration from '../utils/staticPathGeneration';
import useApi from './useApi';

const usePersonInfo = (id) => {
  const [pesonInfo, setPersonInfo] = useState();

  const queryParams = `${profile.params[0].name}=${profile.params[0].value}&${profile.params[1].name}=`;
  const options = [
    ['images', 'get', `${queryParams}${id}`],
    ['personById', 'get', id],
    // toDo: скорректировать опции по запросу на userInfo
    // Т.к. в дальнейшем будет много сущностей с информацией о пользователе,
    // то следует добавить параметры запроса 3-м значением в массиве
    ['userInfo', 'get'],
  ];
  const { data, isLoading, isError } = useApi(options);
  useEffect(() => {
    let personData;
    if (data) {
      personData = [...data];
      personData[0] = staticPathGeneration(
        personData[0].find((item) => item.url_avatar).url_avatar
      );
    }
    setPersonInfo(data ? personData : data);
  }, [data]);

  return { pesonInfo, isLoading, isError };
};

export default usePersonInfo;
