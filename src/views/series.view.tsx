import SeriesCard from "../Components/SeriesCard/SeriesCard";

function seriesView() {
    return (
        <div>
            <h1>Series</h1>
            <div style={{display:"flex"}}>
                <SeriesCard
                    image_src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116674-p3zK4PUX2Aag.jpg"
                    title="BLEACH: Sennen Kessen-hen"
                    color="#e45043"
                    width={200}
                    height={300}
                />
                <SeriesCard
                    image_src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg"
                    title="Sono Bisque Doll wa Koi wo Suru"
                    color="#e46b5d"
                    width={200}
                    height={300}
                    opened={true}
                />
                <SeriesCard
                    image_src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112649-Wdcxo6cQZbhx.jpg"
                    title="Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari"
                    color="#1aaed6"
                    width={200}
                    height={300}
                />
            </div>
        </div>
    )
}

export default seriesView;