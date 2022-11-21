import { DivResultsContainer, DivResultCard, DivResultImage, DivResultTextContainer, DivResultInfo } from "./MediaSearchDropdown.styled";

import { useTheme } from "@mui/material";
import { IMediaCardProps, IMediaDropdownProps } from "./index.mediaDropdown";

export function MediaDropdown({ mediaSearch, showAnimes = false, showMangas = false, onClick }: IMediaDropdownProps) {
    console.log({showAnimes, showMangas})
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
            {showAnimes && mediaSearch?.anime.results.map((media) => (
                <CreateCardsByMedia onClick={onClick} media={media} key={media.id || media.idMal} />
            ))}
            {showMangas && mediaSearch?.manga.results.map((media) => (
                <CreateCardsByMedia onClick={onClick} media={media} key={media.id || media.idMal} />
            ))}
        </DivResultsContainer>
    )
}