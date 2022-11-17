
export interface IDivProps {
    width: number,
    height: number,
    color: string,
    opened: boolean
}

export interface ISeriesCardProps extends IDivProps {
    image_src: string;
    title: string;
}
