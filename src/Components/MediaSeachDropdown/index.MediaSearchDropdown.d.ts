import { IMedia } from "../../anilist";

export interface IMediaDropdownSearchProps { 
    label: string;
    showMangas?: boolean;
    showAnimes?: boolean;
    onClick?: (media: IMedia) => void;
    style?: React.CSSProperties;
}