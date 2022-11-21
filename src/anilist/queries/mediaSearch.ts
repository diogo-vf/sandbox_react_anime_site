import { gql } from "graphql-request";

export const QUERY_MEADIA_SEARCH = gql`query($search: String!, $perPage: Int = 8, $isAdult: Boolean) {
    anime: Page(perPage: $perPage) {
        pageInfo {
            total
            perPage
            lastPage
            currentPage
            hasNextPage
        }
        results: media(type: ANIME, isAdult: $isAdult, search: $search) {
            id
            title {
                userPreferred
                english
                native
                romaji
            }
            coverImage {
                medium
                large
                extraLarge
                color
            }
            type
            format
            season
            description
            genres
            bannerImage
            isLicensed
            startDate {
                day
                month
                year
            }
        }
    }
    manga: Page(perPage: $perPage) {
        pageInfo {
            total
            perPage
            lastPage
            currentPage
            hasNextPage
        }
        results: media(type: MANGA, isAdult: $isAdult, search: $search) {
            id
            title {
                userPreferred
                english
                native
                romaji
            }
            coverImage {
                medium
                large
                extraLarge
                color
            }
            type
            format
            season
            description
            genres
            bannerImage
            isLicensed
            startDate {
                day
                month
                year
            }
        }
    }
}
`
