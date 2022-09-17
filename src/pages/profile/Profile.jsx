import React from 'react';

import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { List, ListItem } from '@mui/material';
import Box from '@mui/material/Box';

import Sidebar from '../../components/bars/sidebar/Sidebar';
import UserInfo from '../../components/userInfo/userInfo';
import TextContent from '../../components/content/textContent/TextContent';
import CardItem from '../../components/content/cardItem/cardItem';
import CustomDate from '../../components/customMUI/customDate/CustomDate';
import CustomTag from '../../components/customMUI/customTag/CustomTag';
import Toolsbar from '../../components/bars/toolsbar/Toolsbar';


import user from '../../assets/user.png';
import authorAvatar from '../../assets/user.png';
import poster from '../../assets/poster.png';

const Profile = () => {
  const profileData = {
    img: { src: user, alt: 'user' },
    name: 'Nikita Shevkunov',
    login: 'Nikitos',
    level: '20',
    followers: '139',
    favoriteProfile: [
      { src: user, alt: 'user#1' },
      { src: user, alt: 'user#2' },
      { src: user, alt: 'user#3' },
      { src: user, alt: 'user#4' },
      { src: user, alt: 'user#5' },
      { src: user, alt: 'user#6' },
    ],
    favoriteArticle: [
      {
        poster,
        altPoster: 'article#1',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        title: 'Частичное применение в JavaScript',
      },
      {
        poster,
        altPoster: 'article#2',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        title: 'Частичное применение в JavaScript',
      },
      {
        poster,
        altPoster: 'article#3',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        title: 'Частичное применение в JavaScript',
      },
      {
        poster,
        altPoster: 'article#4',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        title: 'Частичное применение в JavaScript',
      },
    ],
    userArticle: [
      {
        poster,
        altPoster: 'article-1',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        datePublic: '7.08.2022 11:29',
        tags: ['JavaScripr', 'ФП', 'АиСД'],
        title: 'Функциональное программирование в JavaScript',
        body: 'Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg ...',
        toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      },
      {
        poster,
        altPoster: 'article-2',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        datePublic: '7.08.2022 11:29',
        tags: ['JavaScripr', 'ФП', 'АиСД'],
        title: 'Функциональное программирование в JavaScript',
        body: 'Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg ...',
        toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      },
      {
        poster,
        altPoster: 'article-3',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        datePublic: '7.08.2022 11:29',
        tags: ['JavaScripr', 'ФП', 'АиСД'],
        title: 'Функциональное программирование в JavaScript',
        body: 'Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg ...',
        toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      },
      {
        poster,
        altPoster: 'article-4',
        authorAvatar,
        authorName: 'David',
        authorLevel: '13',
        datePublic: '7.08.2022 11:29',
        tags: ['JavaScripr', 'ФП', 'АиСД'],
        title: 'Функциональное программирование в JavaScript',
        body: 'Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg ...',
        toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      },
    ],
  };

  return (
    <>
      <Sidebar anchor='left'>
        <UserInfo avatar={profileData.img}>
          <Typography variant='h3'>{profileData.name}</Typography>
          <Typography variant='subtitle'>{profileData.login}</Typography>
          <Typography variant='body'>{profileData.followers} подписчиков</Typography>
          <Typography variant='body'>{profileData.level} уровень</Typography>
          <TextContent
            title='О себе'
            body='Lorem ipsum de Lorem ipsum de Lorem ipsum de 
Lorem ipsum de Lorem ipsum de Lorem ipsum de
Lorem ipsum de Lorem ipsum de Lorem ipsum de
Lorem ipsum de Lorem ipsum de Lorem ipsum de
Lorem ipsum de Lorem ipsum de Lorem ipsum de'
          />
        </UserInfo>
          <div>
            <Typography variant='h2'>Избранные профили</Typography>
            <ImageList sx={{ width: 228, height: 180 }} cols={3}>
              {profileData.favoriteProfile.map((item) => (
                <ImageListItem key={item.alt}>
                  <img
                    src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.alt}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div>
            <Typography variant='h2'>Избранные публикации</Typography>
            <List>
              {profileData.favoriteArticle.map((item) => (
                <ListItem key={item.altPoster}>
                  <CardItem
                    poster={item.poster}
                    alt={item.altPoster}
                    title={item.title}
                    avatar={item.authorAvatar}
                  >
                    <Typography variant='subtitle'>{item.authorName}</Typography>
                    <Typography variant='subtitle'>{item.authorLevel} уровень</Typography>
                  </CardItem>
                </ListItem>
              ))}
            </List>
            <a>Полный список публикаций</a>
          </div>
      </Sidebar>
      <Box
        sx={{
          marginTop: 50,
          marginLeft: 50,
        }}
      >
        <Typography variant='h2'>Публикации пользователя</Typography>
        <List>
          {profileData.userArticle.map((item) => (
            <ListItem key={item.altPoster}>
              <CardItem
                poster={item.poster}
                alt={item.altPoster}
                title={item.title}
                body={item.body}
                avatar={item.authorAvatar}
                date={<CustomDate inner={item.datePublic} />}
                tags={
                  <List>
                    {item.tags.map((tag) => (
                      <ListItem key={tag}>
                        <CustomTag label={tag}/>
                      </ListItem>
                    ))}
                  </List>
                }
                tools={
                  <List>
                    {item.toolCounts.map((count) => (
                      <ListItem key={count.id}>
                         <Toolsbar count={count.value}/> 
                      </ListItem>
                    ))}
                  </List>
                 }
              >
                <Typography variant='subtitle'>{item.authorName}</Typography>
                <Typography variant='subtitle'>{item.authorLevel} уровень</Typography>
              </CardItem>
            </ListItem>
          ))}
        </List>
        <a>Полный список публикаций</a>
      </Box>
    </>
  );
};

export default Profile;
