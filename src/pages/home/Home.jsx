import React from 'react';

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

const Home = () => {
  const selectData = [
    {
      label: 'Все категории',
      options: ['JavaScript', 'СSS', 'React', 'Функциональное программирование'],
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
      toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #2',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #3',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #4',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #5',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      datePublic: '7.08.2022 11:29',
    },
    {
      poster,
      authorAvatar,
      name: 'Статья #6',
      body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      tags: ['JavaScripr', 'ФП', 'АиСД'],
      toolCounts: [ {id: 1, value: 100}, {id: 1, value: 20}, {id: 1, value: 40}],
      datePublic: '7.08.2022 11:29',
    },
  ];
  return (
    <Container sx={{ bgcolor: '#cfe8fc', padding: '10em' }} component='main'>
      <Searchbar />
      <List>
        {selectData.map((item) => (
          <ListItem key={item.label}>
            <CustomSelect label={item.label} options={item.options} />
          </ListItem>
        ))}
      </List>
      <List>
        {cardData.map((item) => (
          <ListItem key={item.name}>
            <CardItem
              poster={item.poster}
              title={item.name}
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
              <Typography variant='subtitle'>Nikitos</Typography>
              <Typography variant='subtitle'>20 уровень</Typography>
              <Typography variant='subtitle'>Nikita Shevkunov</Typography>
            </CardItem>
          </ListItem>
        ))}
      </List>
      <CustomPagination count={10} />
    </Container>
  );
};

export default Home;
