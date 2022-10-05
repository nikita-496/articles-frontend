import { API, postJSON } from './api';
import profileService from './profileService';

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

export default { login };
