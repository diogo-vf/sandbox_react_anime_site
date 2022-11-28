import { IMedia } from "../../anilist";

export interface IMediaDropdownSearchProps { 
    label: string;
    onClick?: (media: IMedia) => void;
    style?: React.CSSProperties;
}