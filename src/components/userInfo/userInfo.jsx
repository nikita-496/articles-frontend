import React from 'react';
import Avatar from '@mui/material/Avatar';


const UserInfo = (props) => {
  return (
    <div>
      <Avatar alt={props.avatar.alt} src={props.avatar.src} />
      {props.children}
    </div>

  )
}

export default UserInfo

/*
  {
        props.login && <h3>{props.login}</h3>
      }
      {
        props.level && <p>{props.level}</p>
      }
      {
        props.name && <p>{props.name}</p>
      }

*/