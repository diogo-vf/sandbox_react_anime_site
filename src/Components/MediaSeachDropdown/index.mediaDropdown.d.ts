import { IMedia } from "../../anilist";
import { ISearchMedia } from "../../anilist/queries/index.search";

export interface IMediaDropdownProps {
    animes?: ISearchMedia;
    onClick?: (media: IMedia) => void;
}
export interface IMediaCardProps {
    media: IMedia;
    onClick?: (media: IMedia) => void;
}