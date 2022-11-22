
interface IProps {
    width: number;
    height: number;
    color: string;
    opened?: boolean;
}

export interface IDivProps extends IProps{
    opened: boolean;
}

export interface ISeriesCardProps extends IProps {
    image_src: string;
    title: string;
}
