import { gql } from "graphql-request";

export const QUERY_CHARACTER_SEARCH = gql`query($search: String, $perPage: Int = 8, $isAdult: Boolean) {
    characters: Page(perPage: $perPage) {
        pageInfo {
            total
            perPage
            lastPage
            currentPage
            hasNextPage
        }
        results: characters(search: $search) {
            id
            name {
                userPreferred
            }
            image {
                medium
            }
        }
    }
}
`
