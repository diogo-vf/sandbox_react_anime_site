
interface IProps {
    width: number,
    height: number,
    color: string,
    opened?: boolean = false
}

export interface IDivProps extends IProps{
    opened: boolean = false
}

export interface ISeriesCardProps extends IProps {
    image_src: string;
    title: string;
}
