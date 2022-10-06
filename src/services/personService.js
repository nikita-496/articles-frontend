import { API, postJSON } from './api';
import profileService from './profileService';
import handleDefaultEntity from '../utils/handleDefaultEntity';

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
  const authenticated = await postJSON(API.login, payload);
  const { id } = authenticated.data;

  const userInfo = await postJSON(API.joingPerson, { user_id: id });

  const allProfile = await profileService.fetch();
  const profileOfAuthenticated = allProfile.data.filter(
    (profile) => profile.user_id === String(id)
  );

  const userFeed = await postJSON(API.joingProfile, { profile_id: profileOfAuthenticated[0].id });

  return { userInfo: userInfo.data[0], userFeed: userFeed.data[0] };
};

export default { register, login };
