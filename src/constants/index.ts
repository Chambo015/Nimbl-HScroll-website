import { ISessionTwitter } from '@/types';

export const STORAGE_USER_KEY = 'twitter-user'
export const STORAGE_UUID_KEY = 'uuid-user' 
export const DEFAULT_USER_STORAGE: ISessionTwitter = {
  user: null,
  token: null,
  total_invites: null,
  weekly_leaderboard: null
} as const
export const MULTIPLIER = {
  '3X': '3X',
  '2X': '2X',
  '1.5X': '1.5X',
  '1.2X': '1.2X'
} as const
