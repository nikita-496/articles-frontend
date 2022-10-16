import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useState,  useEffect } from 'react';


const useId = (content) => {
  const [id, setId] = useState(getId(content));

  useEffect(() => {
    setId(getId(content))
  },[]);

  function getId (content) {
    if (content.length) {
      const reqForReplace = /<[<>]*h2/g;
      const withReplacedTag = content.replace(reqForReplace, '☺');

      const reqForDefine = />[a-яА-Я #\-\d]+/g;
      const idArr = withReplacedTag.match(reqForDefine).map((i) => i.slice(1));
      return idArr;
    } else {
      return id;
    }
  }
  return id;
};

const LinkTab = React.forwardRef((props, link) => {
  return (
    <Tab
      ref={link}
      id={props.value}
      className={props.value === props.active ? 'active tab' : 'tab'}
      component='a'
      {...props}
    />
  );
});

const link = React.createRef();

const CustomTabs = ({ text, chapter }) => {
  const chapters = useId(text);
  const [value, setValue] = React.useState(chapter);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  return (
    <nav className='tabs'>
      <Tabs value={value} onChange={handleChange}>
        {chapters.map((ch, i) => (
          <LinkTab
            ref={link}
            key={ch}
            label={ch}
            value={i}
            active={value}
          />
        ))}
      </Tabs>
    </nav>
  );
};

export default CustomTabs;