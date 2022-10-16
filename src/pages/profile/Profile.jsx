import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { List, ListItem } from '@mui/material';

import Sidebar from '../../components/bars/sidebar/Sidebar';


const Profile = ({ ownerData, listData }) => {
  const { avatar, fullname, login, details, bio } = ownerData;
  const [avatars, info] = listData.favoriteProfiles;
  const [articles] = listData.favoriteArticles;

  const owner = (
    <li>
      <figure>
        <img style={{width: 100, height: 100}} alt={login} src={avatar} />
        <figcaption>
          <h4>{fullname}</h4>
        </figcaption>
      </figure>
      <span>{login}</span>
      <span>{details.subscribers} подписчиков </span>
      <span>{details.level} уровень</span>
      <h3>О себе</h3>
      <p>{bio}</p>
    </li>
  );

  const list = (
    <li>
      <ul>
        <li>
          <h3>Избранные профили</h3>
          <ImageList sx={{ width: 200, height: 100 }} cols={3} rowHeight={100}>
            {avatars.map((item, i) => (
              <ImageListItem key={info[i].id}>
                <img
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={info[i].login}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </li>
        <li>
          <h3>Избранные публикации</h3>
          <List>
            {articles.map((article) => (
              <ListItem key={article.id}>
                <h4>{article.title}</h4>
              </ListItem>
            ))}
          </List>
        </li>
      </ul>
    </li>
  );

  return (
    <>
      <Sidebar anchor='left' owner={owner} list={list} />
    </>
  );
};

export default Profile;

