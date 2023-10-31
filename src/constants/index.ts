import { ISessionTwitter } from '@/types';

export const STORAGE_USER_KEY = 'twitter-user';
export const DEFAULT_USER_STORAGE: ISessionTwitter = {
  user: null,
  token: null,
  uuid: null
}