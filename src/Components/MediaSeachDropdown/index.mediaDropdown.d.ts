import { IMedia } from "../../anilist";
import { IMediaSearch } from "../../anilist/queries/index.MediaSearch";

export interface IMediaDropdownProps {
    mediaSearch?: IMediaSearch;
    showAnimes?: boolean;
    showMangas?: boolean;
    onClick?: (media: IMedia) => void;
}
export interface IMediaCardProps {
    media: IMedia;
    onClick?: (media: IMedia) => void;
}