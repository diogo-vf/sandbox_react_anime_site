import SeriesCard from "../SeriesCard/SeriesCard";
import { MediaSearchDropdown } from "../MediaSeachDropdown/MediaSearchDropdown";
import { useState } from "react";
import { IMedia } from "../../anilist";
import {
  MediaDropdownContainer,
  SeriesTitleContainer,
} from "./SeriesForm.styled";
// TODO show table with episodes and show prequel / sequel / side stories on the top
let actualSeries = {
  title: "",
  description: "",
  coverImage: {
    color: "#f19335",
    extraLarge:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
    medium:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx269-KxkqTIuQgJ6v.png",
  },
  episodes: [
    {
      number: "01",
      name: "",
      links: [
        {
          icon: "nyaa path",
          url: "nyaa.si/....",
        },
        {
          icon: "mega path",
          url: "mega.co/....",
        },
      ],
    },
    {
      number: "02",
      name: "",
      links: [
        {
          icon: "nyaa path",
          url: "nyaa.si/....",
        },
        {
          icon: "mega path",
          url: "mega.co/....",
        },
      ],
    },
    {
      number: "03",
      name: "",
      links: [
        {
          icon: "nyaa path",
          url: "nyaa.si/....",
        },
        {
          icon: "mega path",
          url: "mega.co/....",
        },
      ],
    },
  ],
  prequel: {
    title: "",
    description: "",
    coverImage: {
      color: "#f19335",
      extraLarge:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
      large:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
      medium:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx269-KxkqTIuQgJ6v.png",
    },
  },
  sideStories: [
    {
      title: "",
      description: "",
      coverImage: {
        color: "#f19335",
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx269-KxkqTIuQgJ6v.png",
      },
    },
    {
      title: "",
      description: "",
      coverImage: {
        color: "#f19335",
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx269-KxkqTIuQgJ6v.png",
      },
    },
  ],
  sequel: {
    title: "",
    description: "",
    coverImage: {
      color: "#f19335",
      extraLarge:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-KxkqTIuQgJ6v.png",
      large:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
      medium:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx269-KxkqTIuQgJ6v.png",
    },
  },
};

function SeriesForm() {
  const [media, setMedia] = useState<IMedia>({});
  const [description, setDescription] = useState<string>("");

  const handleClick = async (value: IMedia) => {
    setDescription(value?.description || "");
    setMedia(value);
  };
  return (
    <>
      <SeriesTitleContainer>
        <SeriesCard
          image_src={
            media.coverImage?.extraLarge ||
            media.coverImage?.large ||
            "/logo512.png"
          }
          title={media.title?.romaji || media.title?.english || "Example"}
          color={media.coverImage?.color || "BLACK"}
          width={200}
          height={300}
          opened
          style={{
            flex: "0 0 20%",
            cursor: "default",
          }}
        />
        <MediaDropdownContainer>
          <MediaSearchDropdown
            label="Search Anime"
            onClick={handleClick}
            style={{ borderRadius: 4 }}
            showAnimes
          />
          <div>{description}</div>
        </MediaDropdownContainer>
      </SeriesTitleContainer>
      {/* previous / side stories / sequel */}
      <div style={{display:"flex", justifyContent: "space-around"}}>
        <div>
            previous
        </div>
        <div>
            side stories
        </div>
        <div>
            sequel
        </div>
      </div>
      {/* episodes */}
      
      <div style={{    marginTop: "4rem"}}>
        Episodes
        <div style={{display:"flex", justifyContent: "space-between", margin:"1rem"}}>
            <div>Ep 01</div> 
            <div style ={{display:"flex"}}>
                <div>nyaa icon</div> <div>mega icon</div>
            </div>
        </div>
        <div style={{display:"flex", justifyContent: "space-between", margin:"1rem"}}>
            <div>Ep 02</div> 
            <div style ={{display:"flex"}}>
                <div>nyaa icon</div> <div>mega icon</div>
            </div>
        </div>
        <div style={{display:"flex", justifyContent: "space-between", margin:"1rem"}}>
            <div>Ep 03</div> 
            <div style ={{display:"flex"}}>
                <div>nyaa icon</div> <div>mega icon</div>
            </div>
        </div>
      </div>
    </>
  );
}

export default SeriesForm;
