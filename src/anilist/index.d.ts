export interface IMedia {
    readonly id?: null | number;
    readonly idMal?: null | number;
    readonly title?: null | IMediaTitle;
    readonly type?: null | MediaType;
    readonly format?: null | MediaFormat;
    readonly status?: null | MediaStatus;
    readonly description?: null | string;
    readonly startDate?: null | IFuzzyDateInt;
    readonly endDate?: null | IFuzzyDateInt;
    readonly season?: null | MediaSeason;
    readonly seasonYear?: null | number;
    readonly seasonInt?: null | number;
    readonly episodes?: null | number;
    readonly duration?: null | number;
    readonly chapters?: null | number;
    readonly volumes?: null | number;
    readonly countryOfOrigin?: null | CountryCode;
    readonly isLicensed?: null | boolean;
    readonly source?: null | MediaSource;
    readonly hashtag?: null | string;
    readonly trailer?: null | IMediaTrailer;
    readonly updatedAt?: null | number;
    readonly coverImage?: null | ICoverImage;
    readonly bannerImage?: null | string;
    readonly genres?: null | string[];
    readonly synonyms?: null | string[];
    readonly averageScore?: null | number;
    readonly meanScore?: null | number;
    readonly popularity?: null | number;
    readonly isLocked?: null | boolean;
    readonly trending?: null | number;
    readonly favourites?: null | number;
    readonly tags?: null | IMediaTag[];
    readonly relations?: null | IMediaConnection;
    readonly characters?: null | ICharacterConnection;
    readonly staff?: null | IStaffConnection;
    readonly studios?: null | IStudioConnection;
    readonly isFavourite?: null | boolean;
    readonly isFavouriteBlocked?: null | boolean;
    readonly isAdult?: null | boolean;
    readonly nextAiringEpisode?: null | IAiringSchedule;
    readonly airingSchedule?: null | IAiringScheduleConnection;
    readonly trends?: null | IMediaTrendConnection;
    readonly externalLinks?: null | IMediaExternalLink[];
    readonly streamingEpisodes?: null | IMediaStreamingEpisode[];
    readonly rankings?: null | IMediaRank[];
    readonly mediaListEntry?: null | IMediaList;
    readonly reviews?: null | IReviewConnection;
    readonly recommendations?: null | IRecommendationConnection;
    readonly stats?: null | IMediaStats;
    readonly siteUrl?: null | string;
    readonly autoCreateForumThread?: null | boolean;
    readonly isRecommendationBlocked?: null | boolean;
    readonly isReviewBlocked?: null | boolean;
    readonly modNotes?: null | string;
}

export interface IMediaTitle {
    readonly userPreferred?: null | string;
    readonly native?: null | string;
    readonly romaji?: null | string;
    readonly english?: null | string;
}

export interface IMediaTrailer {
    readonly id?: null | number;
    readonly site?: null | string;
    readonly thumbnail?: null | string;
}

export interface IMediaTag {
    readonly id?: null | number;
    readonly name?: null | string;
    readonly description?: null | string;
    readonly category?: null | string;
    readonly rank?: null | number;
    readonly isGeneralSpoiler?: null | boolean;
    readonly isMediaSpoiler?: null | boolean;
    readonly isAdult?: null | boolean;
    readonly userId?: null | number;
}

export interface IMediaListTypeOptions {
    readonly sectionOrder?: null | string[];
    readonly splitCompletedSectionByFormat?: null | boolean;
    readonly customLists?: null | string[];
    readonly advancedScoring?: null | string[];
    readonly advancedScoringEnabled?: null | boolean;
}

export interface IMediaTrend {
    readonly mediaId?: null | number;
    readonly date?: null | number;
    readonly trending?: null | number;
    readonly averageScore?: null | number;
    readonly inProgress?: null | number;
    readonly releasing?: null | boolean;
    readonly episode?: null | number;
    readonly media?: null | IMedia;
}

export interface IMediaTrendEdge {
    readonly node?: null | IMediaTrend;
}

export interface IMediaTrendConnection {
    readonly edges?: null | IMediaTrendEdge[];
    readonly nodes?: null | IMediaTrend[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IMediaExternalLink {
    readonly id?: null | number;
    readonly url?: null | string;
    readonly site?: null | string;
    readonly siteId?: null | number;
    readonly type?: null | ExternalLinkType;
    readonly language?: null | string;
    readonly color?: null | string;
    readonly icon?: null | string;
    readonly notes?: null | string;
    readonly isDisabled?: null | boolean;
}

export interface IMediaRank {
    readonly id?: null | number;
    readonly rank?: null | number;
    readonly type?: null | MediaRankType;
    readonly format?: null | MediaFormat;
    readonly year?: null | number;
    readonly season?: null | MediaSeason;
    readonly allTime?: null | boolean;
    readonly context?: null | string;
}

export interface IMediaStreamingEpisode {
    readonly title?: null | string;
    readonly thumbnail?: null | string;
    readonly url?: null | string;
    readonly site?: null | string;
}

export interface IMediaList {
    readonly id?: null | number;
    readonly userId?: null | number;
    readonly mediaId?: null | number;
    readonly status?: null | MediaListStatus;
    readonly score?: null | number;
    readonly progress?: null | number;
    readonly progressVolumes?: null | number;
    readonly repeat?: null | number;
    readonly priority?: null | number;
    readonly private?: null | boolean;
    readonly notes?: null | string;
    readonly hiddenFromStatusLists?: null | boolean;
    readonly customLists?: null | JSONValue;
    readonly advancedScores?: null | JSONValue;
    readonly startedAt?: null | IFuzzyDateInt;
    readonly completedAt?: null | IFuzzyDateInt;
    readonly updatedAt?: null | number;
    readonly createdAt?: null | number;
    readonly media?: null | IMedia;
    readonly user?: null | IUser;
}

export interface IMediaStats {
    readonly scoreDistribution?: null | IScoreDistribution[];
    readonly statusDistribution?: null | IStatusDistribution[];
}

export interface IMediaConnection {
    readonly edges?: null | IMediaEdge[];
    readonly nodes?: null | IMedia[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IMediaEdge {
    readonly node?: null | IMedia;
    readonly id?: null | number;
    readonly relationType?: null | MediaRelation;
    readonly isMainStudio?: null | boolean;
    readonly characters?: null | ICharacter[];
    readonly characterRole?: null | CharacterRole;
    readonly characterName?: null | string;
    readonly roleNotes?: null | string;
    readonly dubGroup?: null | string;
    readonly staffRole?: null | string;
    readonly voiceActors?: null | IStaff[];
    readonly voiceActorRoles?: null | IStaffRoleType[];
    readonly favouriteOrder?: null | number;
}
export interface ICharacter {
    readonly id?: null | number;
    readonly name?: null | ICharacterName;
    readonly image?: null | ICharacterImage;
    readonly description?: null | string;
    readonly gender?: null | string;
    readonly dateOfBirth?: null | IFuzzyDatenumber
    readonly age?: null | string;
    readonly bloodType?: null | string;
    readonly isFavourite?: null | boolean;
    readonly isFavouriteBlocked?: null | boolean;
    readonly siteUrl?: null | string;
    readonly media?: null | IMediaConnection;
    readonly favourites?: null | number;
    readonly modNotes?: null | string;
}

export interface ICharacterName {
    readonly first?: null | string;
    readonly middle?: null | string;
    readonly last?: null | string;
    readonly full?: null | string;
    readonly native?: null | string;
    readonly alternative?: null | string[];
    readonly alternativeSpoiler?: null | string[];
    readonly userPreferred?: null | string;
}

export interface ICharacterEdge {
    readonly node?: null | ICharacter;
    readonly id?: null | number;
    readonly role?: null | CharacterRole;
    readonly name?: null | string;
    readonly voiceActors?: null | IStaff[];
    readonly voiceActorRoles?: null | IStaffRoleType[];
    readonly media?: null | IMedia[];
    readonly favouriteOrder?: null | number;
}

export interface ICharacterConnection {
    readonly edges?: null | ICharacterEdge[];
    readonly nodes?: null | ICharacter[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IStudio {
    readonly id?: null | number;
    readonly name?: null | string;
    readonly isAnimationStudio?: null | boolean;
    readonly media?: null | IMediaConnection;
    readonly siteUrl?: null | string;
    readonly isFavourite?: null | boolean;
    readonly favourites?: null | number;
}

export interface IStudioEdge {
    readonly node?: null | IStudio;
    readonly id?: null | number;
    readonly isMain?: null | boolean;
    readonly favouriteOrder?: null | number;
}

export interface IStudioConnection {
    readonly edges?: null | IStudioEdge[];
    readonly nodes?: null | IStudio[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IUser {
    readonly id?: null | number;
    readonly name?: null | string;
    readonly about?: null | string;
    readonly avatar?: null | IUserAvatar;
    readonly bannerImage?: null | string;
    readonly isFollowing?: null | boolean;
    readonly isFollower?: null | boolean;
    readonly isBlocked?: null | boolean;
    readonly bans?: null | JSONValue;
    readonly options?: null | IUserOptions;
    readonly mediaListOptions?: null | IMediaListOptions;
    readonly favourites?: null | IFavourites;
    readonly statistics?: null | IUserStatisticTypes;
    readonly unreadNotificationCount?: null | number;
    readonly siteUrl?: null | string;
    readonly donatorTier?: null | number;
    readonly donatorBadge?: null | string;
    readonly moderatorRoles?: null | ModRole[];
    readonly createdAt?: null | number;
    readonly updatedAt?: null | number;
    readonly previousNames?: null | IUserPreviousName[];
}

export interface IUserPreviousName {
    readonly name?: null | string;
    readonly createdAt?: null | number;
    readonly updatedAt?: null | number;
}

export interface IUserOptions {
    readonly titleLanguage?: null | UserTitleLanguage;
    readonly displayAdultContent?: null | boolean;
    readonly airingNotifications?: null | boolean;
    readonly profileColor?: null | string;
    readonly notificationOptions?: null | INotificationOption[];
    readonly timezone?: null | string;
    readonly activityMergeTime?: null | number;
    readonly staffNameLanguage?: null | UserStaffNameLanguage;
    readonly restrictMessagesToFollowing?: null | boolean;
    readonly disabledListActivity?: null | IListActivityOption[];
}

export interface IUserOptions {
    readonly scoreFormat?: null | ScoreFormat;
    readonly rowOrder?: null | string;
    readonly animeList?: null | IMediaListTypeOptions;
    readonly mangaList?: null | IMediaListTypeOptions;
}

export interface IStaff {
    readonly id?: null | number;
    readonly name?: null | IStaffName;
    readonly languageV2?: null | string;
    readonly image?: null | IStaffImage;
    readonly description?: null | string;
    readonly primaryOccupations?: null | string[];
    readonly gender?: null | string;
    readonly dateOfBirth?: null | IFuzzyDatenumber;
    readonly dateOfDeath?: null | IFuzzyDatenumber;
    readonly age?: null | number;
    readonly yearsActive?: null | number[];
    readonly homeTown?: null | string;
    readonly bloodType?: null | string;
    readonly isFavourite?: null | boolean;
    readonly isFavouriteBlocked?: null | boolean;
    readonly siteUrl?: null | string;
    readonly staffMedia?: null | IMediaConnection;
    readonly characters?: null | ICharacterConnection;
    readonly characterMedia?: null | IMediaConnection;
    readonly staff?: null | IStaff;
    readonly submitter?: null | IUser;
    readonly submissionStatus?: null | number;
    readonly submissionNotes?: null | string;
    readonly favourites?: null | number;
    readonly modNotes?: null | string;
}

export interface IStaffName {
    readonly first?: null | string;
    readonly middle?: null | string;
    readonly last?: null | string;
    readonly full?: null | string;
    readonly native?: null | string;
    readonly alternative?: null | string[];
    readonly userPreferred?: null | string;
}

export interface IStaffEdge {
    readonly node?: null | IStaff;
    readonly id?: null | number;
    readonly role?: null | string;
    readonly favouriteOrder?: null | number;
}

export interface IStaffConnection {
    readonly edges?: null | IStaffEdge[];
    readonly nodes?: null | IStaff[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IStaffRoleType {
    readonly voiceActor?: null | IStaff;
    readonly roleNotes?: null | string;
    readonly dubGroup?: null | string;
}

export interface IReview {
    readonly id?: null | number;
    readonly userId?: null | number;
    readonly mediaId?: null | number;
    readonly mediaType?: null | MediaType;
    readonly summary?: null | string;
    readonly body?: null | string;
    readonly rating?: null | number;
    readonly ratingAmount?: null | number;
    readonly userRating?: null | ReviewRating;
    readonly score?: null | number;
    readonly private?: null | boolean;
    readonly siteUrl?: null | string;
    readonly createdAt?: null | number;
    readonly updatedAt?: null | number;
    readonly user?: null | IUser;
    readonly media?: null | IMedia;
}

export interface IReviewEdge {
    readonly node?: null | IReview;
}

export interface IReviewConnection {
    readonly edges?: null | IReviewEdge[];
    readonly nodes?: null | IReview[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IRecommendation {
    readonly id?: null | number;
    readonly rating?: null | number;
    readonly userRating?: null | RecommendationRating;
    readonly media?: null | MediaConfiguration;
    readonly mediaRecommendation?: null | IMedia;
    readonly user?: null | IUser;
}

export interface IRecommendationEdge {
    readonly node?: null | IRecommendation;
}

export interface IRecommendationConnection {
    readonly edges?: null | IRecommendationEdge[];
    readonly nodes?: null | IRecommendation[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IUserStatistics {
    readonly count?: null | number;
    readonly meanScore?: null | number;
    readonly standardDeviation?: null | number;
    readonly minutesWatched?: null | number;
    readonly episodesWatched?: null | number;
    readonly chaptersRead?: null | number;
    readonly volumesRead?: null | number;
    readonly formats?: null | IUserFormatStatistic[];
    readonly statuses?: null | IUserStatusStatistic[];
    readonly scores?: null | IUserScoreStatistic[];
    readonly lengths?: null | IUserLengthStatistic[];
    readonly releaseYears?: null | IUserReleaseYearStatistic[];
    readonly startYears?: null | IUserStartYearStatistic[];
    readonly genres?: null | IUserGenreStatistic[];
    readonly tags?: null | IUserTagStatistic[];
    readonly countries?: null | IUserCountryStatistic[];
    readonly voiceActors?: null | IUserVoiceActorStatistic[];
    readonly staff?: null | IUserStaffStatistic[];
    readonly studios?: null | IUserStudioStatistic[];
}

export interface IStatistic {
    readonly count?: null | number;
    readonly meanScore?: null | number;
    readonly minutesWatched?: null | number;
    readonly chaptersRead?: null | number;
    readonly mediaIds?: null | number[];
}

export interface IUserFormatStatistic extends IStatistic {
    readonly format?: null | MediaFormat;
}

export interface IUserStatusStatistic extends IStatistic {
    readonly status?: null | MediaListStatus;
}

export interface IUserScoreStatistic extends IStatistic {
    readonly score?: null | number;
}

export interface IUserLengthStatistic extends IStatistic {
    readonly length?: null | string;
}

export interface IUserReleaseYearStatistic extends IStatistic {
    readonly releaseYear?: null | number;
}

export interface IUserStartYearStatistic extends IStatistic {
    readonly startYear?: null | number;
}

export interface IUserGenreStatistic extends IStatistic {
    readonly genre?: null | string;
}

export interface IUserTagStatistic extends IStatistic {
    readonly tag?: null | IMediaTag;
}

export interface IUserCountryStatistic extends IStatistic {
    readonly country?: null | CountryCode;
}

export interface IUserVoiceActorStatistic extends IStatistic {
    readonly voiceActor?: null | IStaff;
    readonly characterIds?: null | number[];
}

export interface IUserStaffStatistic extends IStatistic {
    readonly staff?: null | IStaff;
}

export interface IUserStudioStatistic extends IStatistic {
    readonly studio?: null | IStudio;
}

export interface IUserStatisticTypes {
    readonly anime?: null | IUserStatistics;
    readonly manga?: null | IUserStatistics;
}

export interface IPageInfo {
    readonly total?: null | number;
    readonly perPage?: null | number;
    readonly lastPage?: null | number;
    readonly currentPage?: null | number;
    readonly hasNextPage?: null | boolean;
}

export interface IImage {
    readonly large?: null | string;
    readonly medium?: null | string;
}

export interface ICoverImage extends IImage {
    readonly extraLarge?: null | string;
    readonly color?: null | string;
}

export interface ICharacterImage extends IImage { }

export interface IStaffImage extends IImage { }

export interface IUserAvatar extends IImage { }

export interface IAiringSchedule {
    readonly id?: null | number;
    readonly airingAt?: null | number;
    readonly timeUntilAiring?: null | number;
    readonly episode?: null | number;
    readonly mediaId?: null | number;
    readonly media?: null | IMedia;
}

export interface IAiringScheduleEdge {
    readonly node?: null | IAiringSchedule;
    readonly id?: null | number;
}

export interface IAiringScheduleConnection {
    readonly edges?: null | IAiringScheduleEdge[];
    readonly nodes?: null | IAiringSchedule[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IFuzzyDateInt {
    readonly day?: null | number;
    readonly year?: null | number;
    readonly month?: null | number;
}

export interface INotificationOption {
    readonly type?: null | NotificationType;
    readonly enabled?: null | boolean;
}

export interface IListActivityOption {
    readonly disabled?: null | boolean;
    readonly type?: null | MediaListStatus;
}

export interface IFavourites {
    readonly anime?: null | IMediaConnection;
    readonly manga?: null | IMediaConnection;
    readonly characters?: null | ICharacterConnection;
    readonly staff?: null | IStaffConnection;
    readonly studios?: null | IStudioConnection;
}

export interface IScoreDistribution {
    readonly score?: null | number;
    readonly amount?: null | number;
}

export interface IStatusDistribution {
    readonly status?: null | MediaListStatus;
    readonly amount?: null | number;
}

export interface IMediaPage{
    pageInfo: IPageInfo;
    results: IMedia[];
}

export interface JSONArray extends Array<JSONValue> { }

export interface JSONObject {
    [x: string]: JSONValue;
}

export type JSONValue = string
    | number
    | boolean
    | JSONObject
    | JSONArray;


// All country codes from https?: null |//www.iban.com/country-codes
export type CountryCode = "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "CV" | "KH" | "CM" | "CA" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CD" | "CG" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CI" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "MK" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "UM" | "US" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "AX";

export type NotificationType = "ACTIVITY_MESSAGE" |
    "ACTIVITY_REPLY" |
    "FOLLOWING" |
    "ACTIVITY_MENTION" |
    "THREAD_COMMENT_MENTION" |
    "THREAD_SUBSCRIBED" |
    "THREAD_COMMENT_REPLY" |
    "AIRING" |
    "ACTIVITY_LIKE" |
    "ACTIVITY_REPLY_LIKE" |
    "THREAD_LIKE" |
    "THREAD_COMMENT_LIKE" |
    "ACTIVITY_REPLY_SUBSCRIBED" |
    "RELATED_MEDIA_ADDITION" |
    "MEDIA_DATA_CHANGE" |
    "MEDIA_MERGE" |
    "MEDIA_DELETION";

export type ExternalLinkType = "INFO" |
    "STREAMING" |
    "SOCIAL";

export type ScoreFormat = "POINT_100" |
    "POINT_10_DECIMAL" |
    "POINT_10" |
    "POINT_5" |
    "POINT_3";

export type ModRole = "ADMIN" |
    "LEAD_DEVELOPER" |
    "DEVELOPER" |
    "LEAD_COMMUNITY" |
    "COMMUNITY" |
    "DISCORD_COMMUNITY" |
    "LEAD_ANIME_DATA" |
    "ANIME_DATA" |
    "LEAD_MANGA_DATA" |
    "MANGA_DATA" |
    "LEAD_SOCIAL_MEDIA" |
    "SOCIAL_MEDIA" |
    "RETIRED";

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

export type MediaRankType = "RATED" |
    "POPULAR";

export type MediaListStatus = "CURRENT" |
    "PLANNING" |
    "COMPLETED" |
    "DROPPED" |
    "PAUSED" |
    "REPEATING";

export type CharacterRole = 'MAIN' |
    'SUPPORTING' |
    'BACKGROUND';

export type UserStaffNameLanguage = "ROMAJI_WESTERN" |
    "ROMAJI" |
    "NATIVE";

export type UserTitleLanguage = "ROMAJI" |
    "ENGLISH" |
    "NATIVE" |
    "ROMAJI_STYLISED" |
    "ENGLISH_STYLISED" |
    "NATIVE_STYLISED";

export type ReviewRating = "NO_VOTE" |
    "UP_VOTE" |
    "DOWN_VOTE";

export type RecommendationRating = "NO_RATING" |
    "RATE_UP" |
    "RATE_DOWN";
