import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import Author from '../../components/Author';
import Sidebar from '../../components/bars/sidebar/Sidebar';

const Article = (props) => {

  const owner = (
    <li>
     <p>Автор статьи</p>
    </li>
  );

  const list = (
    <li>
      <p>Похожие статьи</p>
    </li>
  );
  return (
    <Box sx={{ mt: '200px' }}>
      {props.tabs}
      <section>
        <h1>{props.title}</h1>
        <Author info={props.author}>
          <span>{props.author.fullName}</span>
        </Author>
        {props.body}
      </section>
      <Sidebar anchor='right' owner={owner} list={list} />
    </Box>
  );
};

export default Article;

/*
 <Sidebar anchor='right'>
      
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



*/
