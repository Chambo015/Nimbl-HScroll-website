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

export interface IBoardTask {
    id: number;
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
}

export interface ICompletedTask {
    action_type: number;
    created: string;
    id: number;
    is_active: boolean;
    is_deleted: boolean;
    order: number;
    updated: string;
    user: number;
}

export interface IUser {
    user: string; // wallet
    uuid: string;
    key: string;
    telegram_id: string | null;
    telegram_username: string | null;
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
    wallet_address?: null;
}

export interface ISessionTwitter {
    user: IUserTwitter | null;
    total_invites: number | null;
    token: string | null;
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

/* 

{"token": 124121241242,
"user": {
    "id": 1212,
    "username": "string",
    "channel_id": 1212,
    "units": 111,
    "invite_uuid": "212",
    "telegram_id": "string",
    "telegram_username": "tring",
    "wallet_address": null
}}
*/