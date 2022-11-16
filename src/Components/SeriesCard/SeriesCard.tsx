import {StyledCard, StyledCover, StyledBackground, StyledTitle} from "./SeriesCard.styled";
import {Tooltip} from "@mui/material";

interface seriesCardProps {
    image_src: string;
    title: string;
    color: string;
    width: number;
    height: number;
    opened?: boolean;
}

function SeriesCard({image_src, title, color, width, height, opened = false}: seriesCardProps) {
    return (
        <StyledCard>
            <Tooltip title={title} placement="top" arrow followCursor enterDelay={600} enterNextDelay={300}>
                <StyledCover src={image_src} width={`${width}px`} height={`${height}px`}/>
            </Tooltip>
            <StyledBackground width={width} height={height} color={color} opened={opened}>
                <StyledTitle>{title}</StyledTitle>
            </StyledBackground>
        </StyledCard>
    );
}

export default SeriesCard;
