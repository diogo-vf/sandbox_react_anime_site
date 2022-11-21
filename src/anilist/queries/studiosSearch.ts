import { gql } from "graphql-request";

export const QUERY_STUDIO_SEARCH = gql`query($search: String, $perPage, perPage: Int = 13, $isAdult: Boolean) {
    studios: Page(perPage: $perPage) {
        pageInfo {
            total
            perPage
            lastPage
            currentPage
            hasNextPage
        }
        results: studios(search: $search) {
            id
            name
        }
    }
}
`
