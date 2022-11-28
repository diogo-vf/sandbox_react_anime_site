import SeriesCard from "../SeriesCard/SeriesCard";
import {MediaSearchDropdown} from "../MediaSeachDropdown/MediaSearchDropdown";
import {useState} from "react";
import {IMedia} from "../../anilist";


function SeriesForm() {
    const [media, setMedia] = useState<IMedia>({})
    const [description, setDescription] = useState<string>("")

    const handleClick = async (value: IMedia) => {
        setDescription(value?.description || "")
        setMedia(value)
    }
    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <SeriesCard
                    image_src={media.coverImage?.extraLarge || media.coverImage?.large || "/logo512.png"}
                    title={media.title?.romaji || media.title?.english || "Example"}
                    color={media.coverImage?.color || "BLACK"}
                    width={200}
                    height={300}
                    opened
                    style={{
                        flex: "0 0 20%"
                }}
                />
                <div style={{
                    marginTop: "4rem",
                    display: "flex",
                    flex: "1 0 60%",
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}>
                    <MediaSearchDropdown label="Search Anime" onClick={handleClick} style={{borderRadius:4}}/>
                    <div>{description}</div>

                </div>
            </div>
        </>
    );
}

export default SeriesForm;
