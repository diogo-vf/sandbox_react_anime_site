import { DivResultsContainer, DivResultCard, DivResultImage, DivResultTextContainer, DivResultInfo } from "./MediaSearchDropdown.styled";

import { useTheme } from "@mui/material";
import { IMediaCardProps, IMediaDropdownProps } from "./index.mediaDropdown";

export function MediaDropdown({ animes, onClick }: IMediaDropdownProps) {

    const theme = useTheme();

    function CreateCardsByMedia({ media, onClick }: IMediaCardProps) {
        return (
            <DivResultCard theme={theme} onClick={() => onClick?.(media) }>
                <DivResultImage src={media?.coverImage?.medium || null} size={70} />
                <DivResultTextContainer>
                    {media?.title?.romaji}
                    <DivResultInfo>
                        <span>{media?.startDate?.year} </span>
                        <span>{media?.format}</span>
                    </DivResultInfo>
                </DivResultTextContainer>
            </DivResultCard>
        )
    }

    return (
        <DivResultsContainer theme={theme}>
            {animes?.data?.anime?.results.map((anime) => (
                <CreateCardsByMedia onClick={onClick} media={anime} key={anime.id || anime.idMal} />
            ))}
        </DivResultsContainer>
    )
}