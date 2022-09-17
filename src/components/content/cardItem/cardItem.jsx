import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UserInfo from '../../userInfo/userInfo';

const CardItem = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' image={props.poster} alt={props.alt} />
      <CardContent>
        <UserInfo avatar={
          {
            src: props.avatar,
            alt: props.authorName,
          }
        }>
          {props.children}
        </UserInfo>
        {props.date}
        <Typography gutterBottom variant='h4'>
          {props.title}
        {props.tags}
        </Typography>
        {props.body && (
          <Typography variant='body2' color='text.secondary'>
            {props.body}
          </Typography>
        )}
        {props.tools}
      </CardContent>
    </Card>
  );
};

export default CardItem;
