import { gql } from "graphql-request";

export const QUERY_STAFF_SEARCH = gql`query($search: String, $perPage: Int = 8, $isAdult: Boolean) {
    staff: Page(perPage: $perPage) {
        pageInfo {
            total
            perPage
            lastPage
            currentPage
            hasNextPage
        }
        results: staff(search: $search) {
            id
            primaryOccupations
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
