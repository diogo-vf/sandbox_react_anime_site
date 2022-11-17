import { IFuzzyDateInt } from "../../anilist"

export interface IMedia {
    data: {
        anime: {
            pageInfo: IPageInfo,
            results: IMediaResult[]
        },
        manga: {

            pageInfo: IPageInfo,
            results: IMediaResult[]
        },
        characters: {
            pageInfo: IPageInfo,
            results: [
                {
                    id: Number,
                    name: ICharacterName,
                    image: ICharacterImage,
                    description: string,
                    gender: string,
                    dateOfBirth: IFuzzyDateInt,
                    age:string,
                    bloodType:string,
                    isFavourite: boolean,
                    isFavouriteBlocked: boolean,
                    siteUrl: string,
                    media: {
                        edges: MediaEdge[]
                    },
                    favourites: Number,
                    modNotes: string
                }]
        },
        staff: {
            pageInfo: {
                total: 1
            },
            results: [
                {
                    id: Number,
                    primaryOccupations: [
                        Mangaka
                    ],
                    name: ICharacterName,
                    image: {
                        medium: https://s4.anilist.co/file/anilistcdn/staff/medium/n269748-m5fQB5J1ekNa.jpg
                    }
                }
            ]
        },
        studios: {
            pageInfo: {
                total: 0
            },
            results: []
        },
        users: {
            results: [
                {
                    id: 5193739,
                    name: bisquet,
                    avatar: {
                        medium: https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b5193739-Hr6YWxDaoxfi.jpg
                    }
                },
                {
                    id: 5904133,
                    name: Bisquette,
                    avatar: {
                        medium: https://s4.anilist.co/file/anilistcdn/user/avatar/medium/default.png
                    }
                },
                {
                    id: 717066,
                    name: SalamanderBisque,
                    avatar: {
                        medium: https://s4.anilist.co/file/anilistcdn/user/avatar/medium/default.png
                    }
                }
            ]
        }
    }
}

// export interface IMedia {
//     data: {
//         anime: {
//             pageInfo: {
//                 total: Number;
//             },
//             results:
//                 {
//                     id: Number,
//                     title: {
//                         userPreferred: null | string,
//                         english: null | string,
//                         native: null | string,
//                         romaji: null | string,
//                     },
//                     coverImage: {
//                         medium: null | string,
//                         large: null | string,
//                         extraLarge: null | string,
//                         color: null | string,
//                     },
//                     type: null | string,
//                     format: null | string,
//                     bannerImage: null | string,
//                     isLicensed: boolean,
//                     startDate: {
//                         day: null | Number,
//                         month: null | Number,
//                         year: null | Number,
//                     }
//                 }[]
//         }
//     }

// }