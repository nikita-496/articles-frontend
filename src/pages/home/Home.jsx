import React, { useEffect, useState } from 'react';

import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

import Searchbar from '../../components/bars/searchbar/Searchbar';
import CustomSelect from '../../components/customMUI/customSelect/customSelect';
import CustomPagination from '../../components/customMUI/customPagination/CustomPagination';
import CardItem from '../../components/content/cardItem/cardItem';
import CustomTag from '../../components/customMUI/customTag/CustomTag';
import CustomDate from '../../components/customMUI/customDate/CustomDate';
import Toolsbar from '../../components/bars/toolsbar/Toolsbar';

import poster from '../../assets/poster.png';
import authorAvatar from '../../assets/user.png';

const Home = (props) => {
  const selectData = [
    {
      label: 'Категории',
      options: ['Все', 'JavaScript', 'CSS', 'React', 'ФП', 'ООП', 'АиСД'],
    },
    {
      label: 'Новые',
      options: ['Популярные', 'Старые'],
    },
  ];
  const cardData = [
    {
      poster,
      authorAvatar,
      name: 'Статья #1',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
      ],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #2',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
      ],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #3',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
      ],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #4',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
      ],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #5',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
      ],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #6',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
      ],
      datePublic: '7.08.2022 11:29',
    },
  ];
  return (
    <Container sx={{ bgcolor: '#cfe8fc', padding: '10em' }} component='main'>
      <Searchbar setSearchQuery={props.setSearchQuery} setQueryParams={props.setQueryParams}/>
      <List>
        {selectData.map((item) => (
          <ListItem key={item.label}>
            <CustomSelect
              label={item.label}
              options={item.options}
              sorted={props.sorted}
              setSortСriteria={props.setSortСriteria}
              setQueryParams={props.setQueryParams}
            />
          </ListItem>
        ))}
      </List>
      {props.articles.length ? (
        <>
          <Typography variant='subtitle'>
            {!props.searchQuery & props.totalArticles
              ? `Всего ${props.totalArticles} статьей`
              : `Найдено ${props.articles.length} статьи`}
          </Typography>
          <List>
            {props.articles.map((article, i) => (
              <ListItem key={article.id}>
                <CardItem
                  poster={cardData[1].poster}
                  title={article.title}
                  body={article.content}
                  avatar={cardData[1].authorAvatar}
                  date={<CustomDate inner={cardData[1].datePublic} />}
                  tags={
                    <List>
                      {cardData[1].tags.map((tag) => (
                        <ListItem key={tag}>
                          <CustomTag label={tag} />
                        </ListItem>
                      ))}
                    </List>
                  }
                  tools={
                    <List>
                      {cardData[1].toolCounts.map((count) => (
                        <ListItem key={count.id}>
                          <Toolsbar count={count.value} />
                        </ListItem>
                      ))}
                    </List>
                  }
                >
                  <Typography variant='subtitle'>Nikitos</Typography>
                  <Typography variant='subtitle'>20 уровень</Typography>
                  <Typography variant='subtitle'>Nikita Shevkunov</Typography>
                </CardItem>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography variant='subtitle'>
         {props.searchQuery ? `Увы, по запросу ${props.searchQuery} статей не найдено` : 'Увы, по Вашему запросу статей не найдено'}
        </Typography>
      )}
      {
        props.totalArticles ? 
        <CustomPagination
         count={Math.ceil(props.totalArticles / 10)}
         page={props.page}
         setPage={props.setPage} />
        : <></>
      }
    </Container>
  );
};

export default Home;