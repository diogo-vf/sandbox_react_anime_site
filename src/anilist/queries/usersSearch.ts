import { gql } from "graphql-request";

export const QUERY_USERS_SEARCH = gql`query($search: String, $perPage: Int = 8, $isAdult: Boolean) {
    users: Page(perPage: $perPage) {
        pageInfo {
            total
            perPage
            lastPage
            currentPage
            hasNextPage
        }
        results: users(search: $search) {
            id
            name
            avatar {
                medium
            }
        }
    }
}
`
