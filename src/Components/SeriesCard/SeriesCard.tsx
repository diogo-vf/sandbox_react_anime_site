import {StyledCard, StyledCover, StyledBackground, StyledTitle} from "./SeriesCard.styled";
import {Tooltip} from "@mui/material";
import { ISeriesCardProps } from ".";



function SeriesCard({image_src, title, color, width, height, opened = false}: ISeriesCardProps) {
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
