
interface ALMediaAnime {
    data: {
        anime: {
            pageInfo: {
                total: number;
            },
            results:
            {
                id: number,
                title: {
                    userPreferred: null | string,
                    english: null | string,
                    native: null | string,
                    romaji: null | string,
                },
                coverImage: {
                    medium: null | string,
                    large: null | string,
                    extraLarge: null | string,
                    color: null | string,
                },
                type: null | string,
                format: null | string,
                bannerImage: null | string,
                isLicensed: boolean,
                startDate: {
                    day: null | number,
                    month: null | number,
                    year: null | number,
                }
            }[]
        }
    }

}
