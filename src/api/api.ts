import { Series, Track, User } from '@/api/api-types';
import fetchWrapper from '@/api/fetch-wrapper';
import { SignupFormData } from '@/pages/signups/CreateSignupPage';

export const pullUser = async () => {
  return fetchWrapper<User>('/api/auth/status');
};

export const logoutUser = async () => {
  return fetch('/api/auth/logout', { credentials: 'include' });
};

export const pullSeries = async () => {
  return fetchWrapper<Series[]>('/api/series');
};

export const pullTracks = async () => {
  return fetchWrapper<Track[]>('/api/iracing/tracks');
};

export const pullChannels = async () => {
  return fetchWrapper<{ id: string; name: string }[]>('/api/discord/channels/signups');
};

export const submitSignup = async (data: SignupFormData) => {
  return fetchWrapper('/api/discord/signups', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
