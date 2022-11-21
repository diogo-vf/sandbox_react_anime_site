
import SeriesCard from "../SeriesCard/SeriesCard";
import { MediaSearchDropdown } from "../MediaSeachDropdown/MediaSearchDropdown";

function SeriesForm() {
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
            <MediaSearchDropdown label="Search Anime"/>
        </>
    );
}

export default SeriesForm;
