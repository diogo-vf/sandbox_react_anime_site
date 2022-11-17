import { type } from "@testing-library/user-event/dist/type";
import { IMedia } from "../Components/SeriesForm";

export interface IPageInfo {
    readonly total: number;
    readonly perPage: number;
    readonly lastPage: number;
    readonly currentPage: number;
    readonly hasNextPage: boolean;
}

export interface ICoverImage {
    readonly medium: string;
    readonly large: string;
    readonly extraLarge: string;
    readonly color: string;
}

export interface IMediaTitle {
    readonly userPreferred: string;
    readonly native: string;
    readonly romaji: string;
    readonly english: string;
}

export interface IFuzzyDateInt {
    readonly day: number;
    readonly year: number;
    readonly month: number;
}

export interface IMediaTrailer {
    readonly id: Number;
    readonly site: string;
    readonly thumbnail: string;
}
export interface IMediaTag {
    id: number;
    name: String;
    description: String;
    category: String;
    rank: number;
    isGeneralSpoiler: Boolean;
    isMediaSpoiler: Boolean;
    isAdult: Boolean;
    userId: number;
}
export interface IMediaResult {
    readonly id: number;
    readonly idMal: number;
    readonly title: IMediaTitle;
    readonly type: MediaType;
    readonly format: MediaFormat;
    readonly status: MediaStatus;
    readonly description: string;
    readonly startDate: IFuzzyDateInt;
    readonly endDate: IFuzzyDateInt;
    readonly season: MediaSeason;
    readonly seasonYear: Number;
    readonly seasonInt: Number;
    readonly episodes: number;
    readonly duration: number;
    readonly chapters: number;
    readonly volumes: number;
    readonly countryOfOrigin: CountryCode
    readonly isLicensed: boolean;
    readonly source: MediaSource;
    readonly hashtag: string;
    readonly trailer: IMediaTrailer;
    readonly updatedAt: number;
    readonly coverImage: ICoverImage;
    readonly bannerImage: string;
    readonly genres: string[];
    readonly synonyms: string[];
    averageScore: number;
    meanScore: number;
    popularity: number;
    isLocked: boolean;
    treding: Number;
    favourites: number;
    tags: IMediaTag[]

    //TODO
    relations: MediaConnection
    characters: CharacterConnection
    staff: StaffConnection
    studios: StudioConnection
    isFavourite: Boolean!
    isFavouriteBlocked: Boolean!
    isAdult: Boolean
    nextAiringEpisode: AiringSchedule
    airingSchedule: AiringScheduleConnection
    trends: MediaTrendConnection
    externalLinks: [MediaExternalLink]
    streamingEpisodes: [MediaStreamingEpisode]
    rankings: [MediaRank]
    mediaListEntry: MediaList
    reviews: ReviewConnection
    recommendations: RecommendationConnection
    stats: MediaStats
    siteUrl: String
    autoCreateForumThread: Boolean
    isRecommendationBlocked: Boolean
    isReviewBlocked: Boolean
    modNotes: String
}

export interface ICharacterName {
    readonly first: string;
    readonly middle: string;
    readonly last: string;
    readonly full: string;
    readonly native: string;
    readonly alternative: string[];
    readonly alternativeSpoiler: string[];
    readonly userPreferred: string;
}

export interface ICharacterImage {
    readonly large: string;
    readonly medium: string;
}
export interface IMediaConnection {
    readonly edges: IMediaEdge[];
    readonly nodes: IMedia[];
    readonly: IPageInfo;
}
export interface IMediaEdge {
    //TODO
    node: IMedia;
    id: number;
    relationType: MediaRelation;
    isMainStudio: boolean;
    characters: [IC];
    characterRole: CharacterRole;
    characterName: String;
    roleNotes: String;
    dubGroup: String;
    staffRole: String;
    voiceActors: [Staff];
    voiceActorRoles: [StaffRoleType];
    favouriteOrder: number;
}

export type MediaType = 'ANIME' |
    'MANGA';

export type MediaFormat = 'TV' |
    'OVA' |
    'ONA' |
    'MOVIE' |
    'MUSIC' |
    'MANGA' |
    'NOVEL' |
    'SPECIAL' |
    'ONE_SHOT' |
    'TV_SHORT';

export type MediaSeason = 'FALL' |
    'WINTER' |
    'SPRING' |
    'SUMMER';

export type MediaStatus = 'FINISHED' |
    'RELEASING' |
    'CANCELLED' |
    'NOT_YET_RELEASED';

// All country codes from https://www.iban.com/country-codes
export type CountryCode = "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "CV" | "KH" | "CM" | "CA" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CD" | "CG" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CI" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "MK" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "UM" | "US" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "AX";

export type MediaSource = 'ORIGINAL' |
    'MANGA' |
    'LIGHT_NOVEL' |
    'VISUAL_NOVEL' |
    'VIDEO_GAME' |
    'OTHER' |
    'NOVEL' |
    'DOUJINSHI' |
    'ANIME' |
    'WEB_NOVEL' |
    'LIVE_ACTION' |
    'GAME' |
    'COMIC' |
    'MULTIMEDIA_PROJECT' |
    'PICTURE_BOOK';

export type MediaRelation = "ADAPTATION" |
    "PREQUEL" |
    "SEQUEL" |
    "PARENT" |
    "SIDE_STORY" |
    "CHARACTER" |
    "SUMMARY" |
    "ALTERNATIVE" |
    "SPIN_OFF" |
    "OTHER" |
    "SOURCE" |
    "COMPILATION" |
    "CONTAINS";