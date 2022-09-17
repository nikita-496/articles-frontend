import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/v1';

const axiosConfig = {
  headers: {
    'Accept-Language': 'ru',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': true,
  },
};

const url = (url) => `${baseUrl}${url}`;

const API = {
  post: url('/post'),
  person: url('/person'),
  profile: url('/profile'),
  feed: url('/feed'),
  comment: url ('/comment'),
  joingPerson: url('/joing/person'),
  joingProfile: url('/joing/profile'),
  login: url('/login'),
  logout: url('/logout')
};

const instnce = axios.create(axiosConfig);

const getJSON = (url, id) => {
  return  instnce.get(id ? `${url}/${id}` : url)
};


const postJSON =  (url, data, config) => {
  return instnce.post(url, data ? JSON.stringify(data) : null, config);
}

const putJSON = (url, data) => instnce.put(url, data);

const deleteJSON = (url, id) => instnce.delete(`${url}/${id}`);

export { API, getJSON, postJSON, putJSON, deleteJSON };