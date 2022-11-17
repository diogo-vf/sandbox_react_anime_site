import { DivResultsContainer, DivResultCard, DivResultImage, DivResultTextContainer, DivResultInfo } from "./SeriesSearchDropdown.styled";


import { useTheme } from "@mui/material";
export function SeriesSearchDropdown() {

    const theme = useTheme();
    return (
        <DivResultsContainer theme={theme}>
            {result.data.anime.results.map((item) => (
                <DivResultCard theme={theme}>
                    <DivResultImage src={item.coverImage.medium} size={70} />
                    <DivResultTextContainer>
                        {item.title.userPreferred}
                        <DivResultInfo>
                            <span>{item.startDate.year} </span>
                            <span>{item.format}</span>
                        </DivResultInfo>
                    </DivResultTextContainer>
                </DivResultCard>
            ))}
        </DivResultsContainer>
    )
}