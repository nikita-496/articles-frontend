import React from 'react';

import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

import Sidebar from '../../components/bars/sidebar/Sidebar';
import UserInfo from '../../components/userInfo/userInfo';
import CardItem from '../../components/content/cardItem/cardItem';
import CustomDate from '../../components/customMUI/customDate/CustomDate';
import CustomTag from '../../components/customMUI/customTag/CustomTag';
import Toolsbar from '../../components/bars/toolsbar/Toolsbar';

import user from '../../assets/user.png';
import CustomButton from '../../components/customMUI/customButton/CustomButton';

import authorAvatar from '../../assets/user.png';
import poster from '../../assets/poster.png';

const Article = () => {
  const articleDate = {
    poster,
    authorAvatar,
    altPoster: 'poster',
    title: 'Карирование',
    body: 'Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg.Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg Lorem inpsum fgwg. Lorem inpsum fgwg Lorem inpsum fgwg.',
    tags: ['JavaScripr', 'ФП', 'АиСД'],
  };
  const sameArticle = [
    {
      poster,
      altPoster: 'sameArticle#1',
      authorAvatar,
      authorName: 'David',
      authorLevel: '13',
      title: 'Частичное применение в JavaScript',
      followers: '109',
      datePublic: '1 месяц назад',
      toolCounts: [
        { id: 1, value: 100 },
        { id: 1, value: 20 },
        { id: 1, value: 40 },
      ],
    },
    {
      poster,
      altPoster: 'sameArticle#2',
      authorAvatar,
      authorName: 'David',
      authorLevel: '13',
      title: 'Частичное применение в JavaScript',
      followers: '109',
      datePublic: '1 месяц назад',
      toolCounts: [
        { id: 1, value: 100 },
        { id: 1, value: 20 },
        { id: 1, value: 40 },
      ],
    },
    {
      poster,
      altPoster: 'sameArticle#3',
      authorAvatar,
      authorName: 'David',
      authorLevel: '13',
      title: 'Частичное применение в JavaScript',
      followers: '109',
      datePublic: '1 месяц назад',
      toolCounts: [
        { id: 1, value: 100 },
        { id: 1, value: 20 },
        { id: 1, value: 40 },
      ],
    },
    {
      poster,
      altPoster: 'sameArticle#4',
      authorAvatar,
      authorName: 'David',
      authorLevel: '13',
      title: 'Частичное применение в JavaScript',
      followers: '109',
      datePublic: '1 месяц назад',
      toolCounts: [
        { id: 1, value: 100 },
        { id: 1, value: 20 },
        { id: 1, value: 40 },
      ],
    },
  ];
  return (
    <>
      <Sidebar anchor='right'>
        <UserInfo avatar={{ src: user, alt: 'user' }}>
          <Typography variant='subtitle'>Nikitos</Typography>
          <Typography variant='body'>20 уровень</Typography>
          <Typography variant='body'>139 подписчиков</Typography>
        </UserInfo>
        <CustomButton inner='Подписаться' />
        <div>
          <Typography variant='h3'>Похожие статьи</Typography>
          <List>
            {sameArticle.map((item) => (
              <ListItem key={item.altPoster}>
                <CardItem
                  poster={item.poster}
                  alt={item.altPoster}
                  title={item.title}
                  avatar={item.authorAvatar}
                  date={<CustomDate inner={item.datePublic} />}
                  tools={
                    <List>
                      {item.toolCounts.map((count) => (
                        <ListItem key={count.id}>
                          <Toolsbar count={count.value} />
                        </ListItem>
                      ))}
                    </List>
                  }
                >
                  <Typography variant='subtitle'>{item.authorName}</Typography>
                  <Typography variant='subtitle'>{item.authorLevel} уровень</Typography>
                  <Typography variant='subtitle'>{item.followers} подписчиков</Typography>
                </CardItem>
              </ListItem>
            ))}
          </List>
        </div>
      </Sidebar>
      <CardItem
        poster={articleDate.poster}
        alt={articleDate.altPoster}
        title={articleDate.title}
        body={articleDate.body}
        avatar={articleDate.authorAvatar}
        authorName='Nikita'
        date={<CustomDate inner='Опубликовано 2 дня назад' />}
        tags={
          <List>
            {articleDate.tags.map((tag) => (
              <ListItem key={tag}>
                <CustomTag label={tag}/>
              </ListItem>
            ))}
          </List>
        }
      >
        <Typography variant='subtitle'>Nikita</Typography>
        <Typography variant='subtitle'>20 уровень уровень</Typography>
        <Typography variant='subtitle'>Nikita Shevkunov</Typography>
      </CardItem>
    </>
  );
};

export default Article;
