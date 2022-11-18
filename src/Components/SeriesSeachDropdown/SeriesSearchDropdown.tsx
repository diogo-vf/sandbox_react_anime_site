import { DivResultsContainer, DivResultCard, DivResultImage, DivResultTextContainer, DivResultInfo } from "./SeriesSearchDropdown.styled";

import { useTheme } from "@mui/material";
import { ISearchMedia } from "../../anilist/queries/index.search";
import { IMedia } from "../../anilist";

export function SeriesSearchDropdown({ animes }: { animes: ISearchMedia }) {

    const theme = useTheme();
    
    function CreateCardsByMedia({media}:{media: IMedia}) {
        return (<DivResultCard theme={theme}>
            <DivResultImage src={media?.coverImage?.medium || null} size={70} />
            <DivResultTextContainer>
                {media?.title?.romaji}
                <DivResultInfo>
                    <span>{media?.startDate?.year} </span>
                    <span>{media?.format}</span>
                </DivResultInfo>
            </DivResultTextContainer>
        </DivResultCard>)
    }

    return (
        <DivResultsContainer theme={theme}>
            {animes?.data?.anime?.results.map((anime) => (
                <CreateCardsByMedia media={anime} />
            ))}
        </DivResultsContainer>
    )
}