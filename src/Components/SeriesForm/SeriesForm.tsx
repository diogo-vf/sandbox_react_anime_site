
import SeriesCard from "../SeriesCard/SeriesCard";
import { MediaSearchDropdown } from "../MediaSeachDropdown/MediaSearchDropdown";
import { useState } from "react";
import { IMedia } from "../../anilist";
import { translate } from "../../anilist/translation/translation";

function SeriesForm() {
    const [media, setMedia] = useState<IMedia>({})
    const [description, setDescription] = useState<string>("")

    const handleClick = async (value: IMedia) => {
        console.log(value)
        // if(value.description)
        //     console.log( await translate({text: value.description, to: "fe", from: "en"}))
        setMedia(value)
    }
    return (
        <>
            <SeriesCard
                image_src={media.coverImage?.extraLarge || media.coverImage?.large || "/logo512.png"}
                title={media.title?.romaji || media.title?.english || "Example"}
                color={media.coverImage?.color || "BLACK" }
                width={200}
                height={300}
                opened
            />
            <div>{description}</div>
            <MediaSearchDropdown label="Search Anime" onClick={handleClick}/>
        </>
    );
}

export default SeriesForm;
