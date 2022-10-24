import React, { useEffect, useReducer } from 'react';

import localStorageManager from '../../persistentStorge/localStorageManager';
import profile from '../../utils/config/queryParams/profile';
import Profile from './Profile';
import interectWithService from '../../utils/interectWithService';
import formatArticleText from '../../utils/formatArticleText';
import usePersonInfo from '../../hooks/usePersonInfo';

const id = localStorageManager.get('user').id;
const queryParams = `${profile.params[0].name}=${profile.params[0].value}&${profile.params[1].name}=`;

const initialState = {
  ownerData: {},
  listData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'owner':
      return {
        ownerData: formOwnerData(action.payload.author),
        listData: action.payload.favorites,
      };
    default:
      throw new Error();
  }
}

function formOwnerData(responseOwnerData) {
  const avatar = responseOwnerData?.[0];
  const identifiers = responseOwnerData?.[1];
  const info = responseOwnerData?.[2][0];
  return {
    userInfo: {
      avatar,
      fullname: identifiers?.name + ' ' + identifiers?.surname,
      login: identifiers?.login,
      details: {
        subscribers: info?.subscribers,
        level: info?.level,
      },
      bio: info?.about_story,
    },
    favoriteProfiles: info?.favorite_profiles,
    favoriteArticles: info?.favorite_articles,
  };
}

async function formListData(favorites) {
  const { favoriteProfilesId, favoriteArticlesId } = favorites;
  const resultingStrings = favoriteProfilesId.map((id) => `${queryParams}${id}`);

  const partsProfiles = [
    ['images', 'get', resultingStrings],
    ['personById', 'get', favoriteProfilesId],
  ];

  const favoriteProfilesPromises = partsProfiles.map(
    async (part) => await interectWithService(...part)
  );

  const partsArticles = [['articleById', 'get', favoriteArticlesId]];

  const favoriteArticlesPromises = partsArticles.map(
    async (part) => await interectWithService(...part)
  );

  return {
    favoriteProfiles: await Promise.all(favoriteProfilesPromises),
    favoriteArticles: await Promise.all(favoriteArticlesPromises),
  };
}

const ProfileContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { ownerData, listData } = state;

  const { pesonInfo: author } = usePersonInfo(id);

  useEffect(() => {
    (async () => {
      if (author) {
        console.log(author);
        let favorites = await formListData({
          favoriteProfilesId: author[2][0].favorite_profiles,
          favoriteArticlesId: author[2][0].favorite_articles,
        });
        favorites.favoriteProfiles[0] = favorites.favoriteProfiles[0].map(
          (profile) => profile.find((item) => item.url_avatar).url_avatar
        );
        favorites.favoriteArticles = favorites.favoriteArticles.map(
          (article) => (article.title = formatArticleText(article))
        );
        dispatch({ type: 'owner', payload: { author, favorites } });
      }
    })();
  }, [author]);

  return (
    <>
      {ownerData?.userInfo?.avatar && (
        <Profile ownerData={ownerData.userInfo} listData={listData} />
      )}
    </>
  );
};

export default ProfileContainer;
