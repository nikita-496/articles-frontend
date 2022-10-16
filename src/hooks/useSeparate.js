import { useState, useEffect } from 'react';

const useSeparate = (content) => {
  const pattern = /<>*h2 [a-яA-я="" #\d\->]+/g;
  const getChapters = () => content.match(pattern).filter((t) => t[t.length - 1] !== '>');

  const [separates, setSeparates] = useState(separate(content, getChapters()))

  useEffect(() => {
    setSeparates(separate(content, getChapters()))
  }, [])
  return separates
}

const separate = (text, chapters) => {
  const hash = {};
  chapters.forEach((ch, i) => {
    hash[i + 1] = text.indexOf(ch);
  });
  let separateValue = [];
  for (let serial in hash) {
    const part = text.slice(hash[serial], hash[String(Number(serial) + 1)]);
    separateValue.push(part);
  }
  return separateValue
};

export default useSeparate