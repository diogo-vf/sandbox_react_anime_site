import SeriesCard from "../SeriesCard/SeriesCard";

import {
    DivResultCard,
    DivResultImage,
    DivResultInfo,
    DivResultsContainer,
    DivResultTextContainer
} from "./SeriesForm.styled";
import {useTheme} from "@mui/material";

function SeriesForm() {

    const theme = useTheme();
    const result: ALAnime = {
        "data": {
            "anime": {
                "pageInfo": {
                    "total": 5000
                },
                "results": [
                    {
                        "id": 132405,
                        "title": {
                            "userPreferred": "Sono Bisque Doll wa Koi wo Suru",
                            "english": "My Dress-Up Darling",
                            "native": "その着せ替え人形は恋をする",
                            "romaji": "Sono Bisque Doll wa Koi wo Suru"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx132405-qP7FQYGmNI3d.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132405-qP7FQYGmNI3d.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg",
                            "color": "#e46b5d"
                        },
                        "type": "ANIME",
                        "format": "TV",
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/132405-LnPQaqaksEpN.jpg",
                        "isLicensed": true,
                        "startDate": {
                            "day": 9,
                            "month": 1,
                            "year": 2022
                        }
                    },
                    {
                        "id": 154768,
                        "title": {
                            "userPreferred": "Sono Bisque Doll wa Koi wo Suru (Zoku-hen)",
                            "english": null,
                            "native": "その着せ替え人形は恋をする (続編)",
                            "romaji": "Sono Bisque Doll wa Koi wo Suru (Zoku-hen)"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx154768-ter5paEcOztK.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154768-ter5paEcOztK.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154768-ter5paEcOztK.jpg",
                            "color": "#e45dae"
                        },
                        "type": "ANIME",
                        "format": null,
                        "bannerImage": null,
                        "isLicensed": true,
                        "startDate": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    {
                        "id": 100401,
                        "title": {
                            "userPreferred": "Piano no Mori (TV)",
                            "english": "Forest of Piano",
                            "native": "ピアノの森 (TV)",
                            "romaji": "Piano no Mori (TV)"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx100401-frKNiXOnRKdu.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100401-frKNiXOnRKdu.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx100401-frKNiXOnRKdu.jpg",
                            "color": "#f1d6a1"
                        },
                        "type": "ANIME",
                        "format": "TV",
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100401-ox7dBr8i1q35.jpg",
                        "isLicensed": true,
                        "startDate": {
                            "day": 9,
                            "month": 4,
                            "year": 2018
                        }
                    },
                    {
                        "id": 7079,
                        "title": {
                            "userPreferred": "Ookami Kakushi",
                            "english": "Okamikakushi ~ Masque of the Wolf",
                            "native": "おおかみかくし",
                            "romaji": "Ookami Kakushi"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/7079.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/7079.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/7079.jpg",
                            "color": "#f1ae5d"
                        },
                        "type": "ANIME",
                        "format": "TV",
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/7079-Dkv8uNiRENwt.jpg",
                        "isLicensed": true,
                        "startDate": {
                            "day": 8,
                            "month": 1,
                            "year": 2010
                        }
                    },
                    {
                        "id": 101336,
                        "title": {
                            "userPreferred": "Karakuri Circus",
                            "english": "Karakuri Circus",
                            "native": "からくりサーカス",
                            "romaji": "Karakuri Circus"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx101336-RhdykHwHu1dh.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx101336-RhdykHwHu1dh.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx101336-RhdykHwHu1dh.jpg",
                            "color": "#1ac9ff"
                        },
                        "type": "ANIME",
                        "format": "TV",
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n101336-qLNjcp3kBrXL.jpg",
                        "isLicensed": true,
                        "startDate": {
                            "day": 11,
                            "month": 10,
                            "year": 2018
                        }
                    },
                    {
                        "id": 140765,
                        "title": {
                            "userPreferred": "Kaitou Queen wa Circus ga Osuki",
                            "english": null,
                            "native": "怪盗クイーンはサーカスがお好き",
                            "romaji": "Kaitou Queen wa Circus ga Osuki"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140765-M7JIvjkNPwuD.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140765-M7JIvjkNPwuD.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140765-M7JIvjkNPwuD.jpg",
                            "color": "#e4bb5d"
                        },
                        "type": "ANIME",
                        "format": "OVA",
                        "bannerImage": null,
                        "isLicensed": true,
                        "startDate": {
                            "day": 17,
                            "month": 6,
                            "year": 2022
                        }
                    },
                    {
                        "id": 103515,
                        "title": {
                            "userPreferred": "Urmă (Zanzou)",
                            "english": null,
                            "native": "Urmă（残像）",
                            "romaji": "Urmă (Zanzou)"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx103515-tcyDlChR1EpP.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx103515-tcyDlChR1EpP.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx103515-tcyDlChR1EpP.jpg",
                            "color": null
                        },
                        "type": "ANIME",
                        "format": "MUSIC",
                        "bannerImage": null,
                        "isLicensed": true,
                        "startDate": {
                            "day": 21,
                            "month": 1,
                            "year": 2011
                        }
                    },
                    {
                        "id": 103514,
                        "title": {
                            "userPreferred": "Answer",
                            "english": null,
                            "native": "Answer",
                            "romaji": "Answer"
                        },
                        "coverImage": {
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx103514-MemVYVLq4Zbz.jpg",
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx103514-MemVYVLq4Zbz.jpg",
                            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx103514-MemVYVLq4Zbz.jpg",
                            "color": "#f18628"
                        },
                        "type": "ANIME",
                        "format": "MUSIC",
                        "bannerImage": null,
                        "isLicensed": true,
                        "startDate": {
                            "day": 30,
                            "month": 11,
                            "year": 2012
                        }
                    }
                ]
            }
        }
    }

    return (
        <>
            <SeriesCard
                image_src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116674-p3zK4PUX2Aag.jpg"
                title="BLEACH: Sennen Kessen-hen"
                color="#e45043"
                width={200}
                height={300}
                opened
            />

            <DivResultsContainer theme={theme}>
                {result.data.anime.results.map((item) => (
                    <DivResultCard theme={theme}>
                        <DivResultImage src={item.coverImage.medium} size={70}/>
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
        </>
    );
}

interface ALAnime {
    data: {
        anime: {
            pageInfo: {
                total: number;
            },
            results:
                {
                    id: number,
                    title: {
                        userPreferred: null | string,
                        english: null | string,
                        native: null | string,
                        romaji: null | string,
                    },
                    coverImage: {
                        medium: null | string,
                        large: null | string,
                        extraLarge: null | string,
                        color: null | string,
                    },
                    type: null | string,
                    format: null | string,
                    bannerImage: null | string,
                    isLicensed: boolean,
                    startDate: {
                        day: null | number,
                        month: null | number,
                        year: null | number,
                    }
                }[]
        }
    }

}

export default SeriesForm;
