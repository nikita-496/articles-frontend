import { API, getJSON, postJSON } from './api';
import handleDefaultEntity from '../utils/handleDefaultEntity';

const fetch = async () => {
  return await getJSON(API.person)
}
const fetchOne = async (id) => {
  return await getJSON(API.person, id)
}

const register = async (payload) => {
  let registeredPerson = await postJSON(API.person, payload);
  registeredPerson = registeredPerson.data;

  const newProfile = await handleDefaultEntity.createNew(API.profile);
  await handleDefaultEntity.update(API.profile, {
    id: newProfile.id,
    user_id: registeredPerson.id,
  });

  const newFeed = await handleDefaultEntity.createNew(API.feed);
  await handleDefaultEntity.update(API.feed, {
    id: newFeed.id,
    profile_id: newProfile.id,
  });

  return registeredPerson;
};

const login = async (payload) => {
  return (await postJSON(API.login, payload)).data;
};

export default { fetch, fetchOne, register, login };
