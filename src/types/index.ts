import {MULTIPLIER} from "@/constants/index";
import type {InjectionKey} from "vue";
import {Ref} from "vue";

export interface VideoI {
    id: number;
    title: string;
    channel: string;
    price: number;
    avatar: string;
    poster: string;
    /* Свойства для видео аудио и субтитров */
    videoSrc?: string;
    audioSrc?: AudioTrackType[];
    subtitles?: {
        src: string;
        kind: "subtitles";
        label: string;
        srcLang: LanguagesType;
    }[];
}

export type SoundVolumeType = "medium" | "low" | "high" | "off";

export type LanguagesType = "en" | "fr" | "es" | "zh" | "it" | "kk" | "de";

export interface AudioTrackType {
    language: LanguagesType;
    src: string;
    label: string;
    flag: string;
}

export interface ITweetsCount {
    done_tweets: number;
    limit_tweets: number;
}
export interface ITweetsMetricsCount {
    done_tweets: number;
    all_tweets: number;
}

export interface IBoardTask {
    id: number;
    embedded_url: null | string;
    task_done: boolean;
    task_image: string | null;
    order: number;
    created: string;
    updated: string;
    is_active: boolean;
    is_deleted: boolean;
    is_completed?: boolean;
    name: string;
    reward: number;
    hunter_task: number;
    tweets_count: ITweetsCount | null;
    tweets_metrics: ITweetsMetricsCount | null;
}

export interface IUserTwitter {
    id: number;
    last_login: string;
    first_name: string;
    last_name: string;
    email: string;
    date_joined: string;
    avatar: string;
    file?: null;
    account_type: number;
    activated_date: string;
    username: string;
    channel_id: number;
    units: number;
    invite_uuid: string;
    telegram_id: string | null;
    telegram_username: string | null;
    wallet_address?: string | null;
}

export interface IResUserInfo {
    user: IUserTwitter | null;
    total_invites: number | null;
    key: string | null;
    multiplier: TypeMultiplier | null;
    temporary_units: number | null;
    multiplier_claimed: boolean;
    twitter_avatar_url: null | string
}

export interface ISessionTwitter {
    user: IUserTwitter | null;
    total_invites: number | null;
    token: string | null;
    weekly_leaderboard: null | IWeeklyLeaderBoard;
    temporary_units: null | number;
    multiplier: TypeMultiplier | null;
    multiplier_claimed: boolean;
    twitter_avatar_url: null | string
}

export interface ITweets {
    id: number;
    order: number;
    created: string;
    updated: string;
    is_active: boolean;
    is_deleted: boolean;
    twitter_username: string;
    tweet_url: string;
}

export interface IUserTg {
    first_name: string;
    hash: string;
    id: number;
    auth_date: number;
    username: string;
    photo_url: string;
}

export interface ILeaderboardUser {
    id: number;
    avatar: string;
    account_type: number;
    username: string;
    units: number;
    invite_count: number;
}

export interface IWeeklyLeaderBoard {
    user_position: number;
    total_users: number;
}

export type TypeMultiplier = (typeof MULTIPLIER)[keyof typeof MULTIPLIER];

export const keyClaim = Symbol() as InjectionKey<{
    showMultiUnitsAnim: Ref<boolean>;
    showTransferUnitsAnim: Ref<boolean>;
}>;
