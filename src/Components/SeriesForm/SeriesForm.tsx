import SeriesCard from "../SeriesCard/SeriesCard";
import {MediaSearchDropdown} from "../MediaSeachDropdown/MediaSearchDropdown";
import {useState} from "react";
import {IMedia} from "../../anilist";
import {setCORS} from "google-translate-api-browser";

function SeriesForm() {
    const translate = setCORS("http://cors-anywhere.herokuapp.com/");

    const [media, setMedia] = useState<IMedia>({})
    const [description, setDescription] = useState<string>("")

    const handleClick = async (value: IMedia) => {
        const res = await translate(value?.description || "", {to: "fr", from: "en"});
        setDescription(res.text)
        setMedia(value)
    }
    return (
        <>
            <div>
            <SeriesCard
                image_src={media.coverImage?.extraLarge || media.coverImage?.large || "/logo512.png"}
                title={media.title?.romaji || media.title?.english || "Example"}
                color={media.coverImage?.color || "BLACK"}
                width={200}
                height={300}
                opened
            />
                <div>{description}</div>
            </div>
                <MediaSearchDropdown label="Search Anime" onClick={handleClick}/>
        </>
    );
}

export default SeriesForm;
