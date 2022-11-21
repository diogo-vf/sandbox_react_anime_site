import request from "graphql-request";
import { IMediaSearch } from "../../anilist/queries/index.mediaSearch";
import { QUERY_MEADIA_SEARCH } from '../../anilist/queries/mediaSearch';
const ENDPOINT = "https://graphql.anilist.co";

export async function MediaSearchByTitle(text: string, perPage: number = 10): Promise<IMediaSearch> {

    return request(
        ENDPOINT,
        QUERY_MEADIA_SEARCH,
        {
            search: text,
            perPage
        }
    );
}
