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
    order: number;
    created: string;
    updated: string;
    is_active: boolean;
    is_deleted: boolean;
    is_completed?: boolean;
    name: string;
    reward: number;
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
}

export interface IUserTwitter {
    id: number;
    last_login?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    date_joined?: string;
    avatar?: string;
    file?: string | null;
    account_type?: number;
    username: string;
    activated_date?: string | null;
    channel_id: number;
}

export interface ISessionTwitter {
    user: IUserTwitter | null;
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