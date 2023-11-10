import { ISessionTwitter } from '@/types';

export const STORAGE_USER_KEY = 'twitter-user'
export const STORAGE_UUID_KEY = 'uuid-user' 
export const DEFAULT_USER_STORAGE: ISessionTwitter = {
  user: null,
  token: null,
  total_invites: null,
  weekly_leaderboard: null,
  multiplier: null,
  temporary_units: null,
  multiplier_claimed: true
} as const;

export const MULTIPLIER = {
  '3X': 'x3',
  '2X': 'x2',
  '1.5X': 'x1.5',
  '1.2X': 'x1.2',
  '1X': 'x1',
} as const
