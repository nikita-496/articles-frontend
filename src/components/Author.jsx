import React from 'react';


const Author = (props) => {
  const {avatar, fullName, level, login} = props.info
  console.log(props.info)
  return (
    <figure>
      <img style={{width: 50, height: 50}} alt={login} src={avatar}/>
      <figcaption>
        <h4>{login}</h4>
        <span>{level} уровень</span>
        {props.children}
      </figcaption>
    </figure>
  )
}

export default Author