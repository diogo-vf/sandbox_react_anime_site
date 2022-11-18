export interface IMedia {
    readonly id?: null | Number;
    readonly idMal?: null | Number;
    readonly title?: null | IMediaTitle;
    readonly type?: null | MediaType;
    readonly format?: null | MediaFormat;
    readonly status?: null | MediaStatus;
    readonly description?: null | String;
    readonly startDate?: null | IFuzzyDateInt;
    readonly endDate?: null | IFuzzyDateInt;
    readonly season?: null | MediaSeason;
    readonly seasonYear?: null | Number;
    readonly seasonInt?: null | Number;
    readonly episodes?: null | Number;
    readonly duration?: null | Number;
    readonly chapters?: null | Number;
    readonly volumes?: null | Number;
    readonly countryOfOrigin?: null | CountryCode;
    readonly isLicensed?: null | Boolean;
    readonly source?: null | MediaSource;
    readonly hashtag?: null | String;
    readonly trailer?: null | IMediaTrailer;
    readonly updatedAt?: null | Number;
    readonly coverImage?: null | ICoverImage;
    readonly bannerImage?: null | String;
    readonly genres?: null | String[];
    readonly synonyms?: null | String[];
    readonly averageScore?: null | Number;
    readonly meanScore?: null | Number;
    readonly popularity?: null | Number;
    readonly isLocked?: null | Boolean;
    readonly trending?: null | Number;
    readonly favourites?: null | Number;
    readonly tags?: null | IMediaTag[];
    readonly relations?: null | IMediaConnection;
    readonly characters?: null | ICharacterConnection;
    readonly staff?: null | IStaffConnection;
    readonly studios?: null | IStudioConnection;
    readonly isFavourite?: null | Boolean;
    readonly isFavouriteBlocked?: null | Boolean;
    readonly isAdult?: null | Boolean;
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
    readonly siteUrl?: null | String;
    readonly autoCreateForumThread?: null | Boolean;
    readonly isRecommendationBlocked?: null | Boolean;
    readonly isReviewBlocked?: null | Boolean;
    readonly modNotes?: null | String;
}

export interface IMediaTitle {
    readonly userPreferred?: null | string;
    readonly native?: null | string;
    readonly romaji?: null | string;
    readonly english?: null | string;
}

export interface IMediaTrailer {
    readonly id?: null | Number;
    readonly site?: null | string;
    readonly thumbnail?: null | string;
}

export interface IMediaTag {
    readonly id?: null | Number;
    readonly name?: null | String;
    readonly description?: null | String;
    readonly category?: null | String;
    readonly rank?: null | Number;
    readonly isGeneralSpoiler?: null | Boolean;
    readonly isMediaSpoiler?: null | Boolean;
    readonly isAdult?: null | Boolean;
    readonly userId?: null | Number;
}

export interface IMediaListTypeOptions {
    readonly sectionOrder?: null | String[];
    readonly splitCompletedSectionByFormat?: null | Boolean;
    readonly customLists?: null | String[];
    readonly advancedScoring?: null | String[];
    readonly advancedScoringEnabled?: null | Boolean;
}

export interface IMediaTrend {
    readonly mediaId?: null | Number;
    readonly date?: null | Number;
    readonly trending?: null | Number;
    readonly averageScore?: null | Number;
    readonly inProgress?: null | Number;
    readonly releasing?: null | Boolean;
    readonly episode?: null | Number;
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
    readonly id?: null | Number;
    readonly url?: null | String;
    readonly site?: null | String;
    readonly siteId?: null | Number;
    readonly type?: null | ExternalLinkType;
    readonly language?: null | String;
    readonly color?: null | String;
    readonly icon?: null | String;
    readonly notes?: null | String;
    readonly isDisabled?: null | Boolean;
}

export interface IMediaRank {
    readonly id?: null | Number;
    readonly rank?: null | Number;
    readonly type?: null | MediaRankType;
    readonly format?: null | MediaFormat;
    readonly year?: null | Number;
    readonly season?: null | MediaSeason;
    readonly allTime?: null | Boolean;
    readonly context?: null | String;
}

export interface IMediaStreamingEpisode {
    readonly title?: null | String;
    readonly thumbnail?: null | String;
    readonly url?: null | String;
    readonly site?: null | String;
}

export interface IMediaList {
    readonly id?: null | Number;
    readonly userId?: null | Number;
    readonly mediaId?: null | Number;
    readonly status?: null | MediaListStatus;
    readonly score?: null | Number;
    readonly progress?: null | Number;
    readonly progressVolumes?: null | Number;
    readonly repeat?: null | Number;
    readonly priority?: null | Number;
    readonly private?: null | Boolean;
    readonly notes?: null | String;
    readonly hiddenFromStatusLists?: null | Boolean;
    readonly customLists?: null | JSONValue;
    readonly advancedScores?: null | JSONValue;
    readonly startedAt?: null | IFuzzyDateInt;
    readonly completedAt?: null | IFuzzyDateInt;
    readonly updatedAt?: null | Number;
    readonly createdAt?: null | Number;
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
    readonly id?: null | Number;
    readonly relationType?: null | MediaRelation;
    readonly isMainStudio?: null | boolean;
    readonly characters?: null | ICharacter[];
    readonly characterRole?: null | CharacterRole;
    readonly characterName?: null | String;
    readonly roleNotes?: null | String;
    readonly dubGroup?: null | String;
    readonly staffRole?: null | String;
    readonly voiceActors?: null | IStaff[];
    readonly voiceActorRoles?: null | IStaffRoleType[];
    readonly favouriteOrder?: null | Number;
}
export interface ICharacter {
    readonly id?: null | Number;
    readonly name?: null | ICharacterName;
    readonly image?: null | ICharacterImage;
    readonly description?: null | String;
    readonly gender?: null | String;
    readonly dateOfBirth?: null | IFuzzyDateNumber
    readonly age?: null | String;
    readonly bloodType?: null | String;
    readonly isFavourite?: null | Boolean;
    readonly isFavouriteBlocked?: null | Boolean;
    readonly siteUrl?: null | String;
    readonly media?: null | IMediaConnection;
    readonly favourites?: null | Number;
    readonly modNotes?: null | String;
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
    readonly id?: null | Number;
    readonly role?: null | CharacterRole;
    readonly name?: null | String;
    readonly voiceActors?: null | IStaff[];
    readonly voiceActorRoles?: null | IStaffRoleType[];
    readonly media?: null | IMedia[];
    readonly favouriteOrder?: null | Number;
}

export interface ICharacterConnection {
    readonly edges?: null | ICharacterEdge[];
    readonly nodes?: null | ICharacter[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IStudio {
    readonly id?: null | Number;
    readonly name?: null | String;
    readonly isAnimationStudio?: null | Boolean;
    readonly media?: null | IMediaConnection;
    readonly siteUrl?: null | String;
    readonly isFavourite?: null | Boolean;
    readonly favourites?: null | Number;
}

export interface IStudioEdge {
    readonly node?: null | IStudio;
    readonly id?: null | Number;
    readonly isMain?: null | Boolean;
    readonly favouriteOrder?: null | Number;
}

export interface IStudioConnection {
    readonly edges?: null | IStudioEdge[];
    readonly nodes?: null | IStudio[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IUser {
    readonly id?: null | Number;
    readonly name?: null | String;
    readonly about?: null | String;
    readonly avatar?: null | IUserAvatar;
    readonly bannerImage?: null | String;
    readonly isFollowing?: null | Boolean;
    readonly isFollower?: null | Boolean;
    readonly isBlocked?: null | Boolean;
    readonly bans?: null | JSONValue;
    readonly options?: null | IUserOptions;
    readonly mediaListOptions?: null | IMediaListOptions;
    readonly favourites?: null | IFavourites;
    readonly statistics?: null | IUserStatisticTypes;
    readonly unreadNotificationCount?: null | Number;
    readonly siteUrl?: null | String;
    readonly donatorTier?: null | Number;
    readonly donatorBadge?: null | String;
    readonly moderatorRoles?: null | ModRole[];
    readonly createdAt?: null | Number;
    readonly updatedAt?: null | Number;
    readonly previousNames?: null | IUserPreviousName[];
}

export interface IUserPreviousName {
    readonly name?: null | String;
    readonly createdAt?: null | Number;
    readonly updatedAt?: null | Number;
}

export interface IUserOptions {
    readonly titleLanguage?: null | UserTitleLanguage;
    readonly displayAdultContent?: null | Boolean;
    readonly airingNotifications?: null | Boolean;
    readonly profileColor?: null | String;
    readonly notificationOptions?: null | INotificationOption[];
    readonly timezone?: null | String;
    readonly activityMergeTime?: null | Number;
    readonly staffNameLanguage?: null | UserStaffNameLanguage;
    readonly restrictMessagesToFollowing?: null | Boolean;
    readonly disabledListActivity?: null | IListActivityOption[];
}

export interface IUserOptions {
    readonly scoreFormat?: null | ScoreFormat;
    readonly rowOrder?: null | String;
    readonly animeList?: null | IMediaListTypeOptions;
    readonly mangaList?: null | IMediaListTypeOptions;
}

export interface IStaff {
    readonly id?: null | Number;
    readonly name?: null | IStaffName;
    readonly languageV2?: null | String;
    readonly image?: null | IStaffImage;
    readonly description?: null | String;
    readonly primaryOccupations?: null | String[];
    readonly gender?: null | String;
    readonly dateOfBirth?: null | IFuzzyDateNumber;
    readonly dateOfDeath?: null | IFuzzyDateNumber;
    readonly age?: null | Number;
    readonly yearsActive?: null | Number[];
    readonly homeTown?: null | String;
    readonly bloodType?: null | String;
    readonly isFavourite?: null | Boolean;
    readonly isFavouriteBlocked?: null | Boolean;
    readonly siteUrl?: null | String;
    readonly staffMedia?: null | IMediaConnection;
    readonly characters?: null | ICharacterConnection;
    readonly characterMedia?: null | IMediaConnection;
    readonly staff?: null | IStaff;
    readonly submitter?: null | IUser;
    readonly submissionStatus?: null | Number;
    readonly submissionNotes?: null | String;
    readonly favourites?: null | Number;
    readonly modNotes?: null | String;
}

export interface IStaffName {
    readonly first?: null | String;
    readonly middle?: null | String;
    readonly last?: null | String;
    readonly full?: null | String;
    readonly native?: null | String;
    readonly alternative?: null | String[];
    readonly userPreferred?: null | String;
}

export interface IStaffEdge {
    readonly node?: null | IStaff;
    readonly id?: null | Number;
    readonly role?: null | String;
    readonly favouriteOrder?: null | Number;
}

export interface IStaffConnection {
    readonly edges?: null | IStaffEdge[];
    readonly nodes?: null | IStaff[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IStaffRoleType {
    readonly voiceActor?: null | IStaff;
    readonly roleNotes?: null | String;
    readonly dubGroup?: null | String;
}

export interface IReview {
    readonly id?: null | Number;
    readonly userId?: null | Number;
    readonly mediaId?: null | Number;
    readonly mediaType?: null | MediaType;
    readonly summary?: null | String;
    readonly body?: null | String;
    readonly rating?: null | Number;
    readonly ratingAmount?: null | Number;
    readonly userRating?: null | ReviewRating;
    readonly score?: null | Number;
    readonly private?: null | Boolean;
    readonly siteUrl?: null | String;
    readonly createdAt?: null | Number;
    readonly updatedAt?: null | Number;
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
    readonly id?: null | Number;
    readonly rating?: null | Number;
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
    readonly count?: null | Number;
    readonly meanScore?: null | Number;
    readonly standardDeviation?: null | Number;
    readonly minutesWatched?: null | Number;
    readonly episodesWatched?: null | Number;
    readonly chaptersRead?: null | Number;
    readonly volumesRead?: null | Number;
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
    readonly count?: null | Number;
    readonly meanScore?: null | Number;
    readonly minutesWatched?: null | Number;
    readonly chaptersRead?: null | Number;
    readonly mediaIds?: null | Number[];
}

export interface IUserFormatStatistic extends IStatistic {
    readonly format?: null | MediaFormat;
}

export interface IUserStatusStatistic extends IStatistic {
    readonly status?: null | MediaListStatus;
}

export interface IUserScoreStatistic extends IStatistic {
    readonly score?: null | Number;
}

export interface IUserLengthStatistic extends IStatistic {
    readonly length?: null | String;
}

export interface IUserReleaseYearStatistic extends IStatistic {
    readonly releaseYear?: null | Number;
}

export interface IUserStartYearStatistic extends IStatistic {
    readonly startYear?: null | Number;
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
    readonly characterIds?: null | Number[];
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
    readonly total?: null | Number;
    readonly perPage?: null | Number;
    readonly lastPage?: null | Number;
    readonly currentPage?: null | Number;
    readonly hasNextPage?: null | boolean;
}

export interface IImage {
    readonly large?: null | String;
    readonly medium?: null | String;
}

export interface ICoverImage extends IImage {
    readonly extraLarge?: null | string;
    readonly color?: null | string;
}

export interface ICharacterImage extends IImage { }

export interface IStaffImage extends IImage { }

export interface IUserAvatar extends IImage { }

export interface IAiringSchedule {
    readonly id?: null | Number;
    readonly airingAt?: null | Number;
    readonly timeUntilAiring?: null | Number;
    readonly episode?: null | Number;
    readonly mediaId?: null | Number;
    readonly media?: null | IMedia;
}

export interface IAiringScheduleEdge {
    readonly node?: null | IAiringSchedule;
    readonly id?: null | Number;
}

export interface IAiringScheduleConnection {
    readonly edges?: null | IAiringScheduleEdge[];
    readonly nodes?: null | IAiringSchedule[];
    readonly pageInfo?: null | IPageInfo;
}

export interface IFuzzyDateInt {
    readonly day?: null | Number;
    readonly year?: null | Number;
    readonly month?: null | Number;
}

export interface INotificationOption {
    readonly type?: null | NotificationType;
    readonly enabled?: null | Boolean;
}

export interface IListActivityOption {
    readonly disabled?: null | Boolean;
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
    readonly score?: null | Number;
    readonly amount?: null | Number;
}

export interface IStatusDistribution {
    readonly status?: null | MediaListStatus;
    readonly amount?: null | Number;
}

export interface JSONArray extends Array<JSONValue> { }

export interface JSONObject {
    [x?: null | string]: JSONValue;
}

export type JSONValue = string
    | Number
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
