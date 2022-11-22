import { TextField } from "@mui/material";
import { useState } from "react";
import { IMediaSearch } from "../../anilist/queries/index.mediaSearch";
import { MediaSearchByTitle } from "../../Common/hook/Media.hook";
import { IMediaDropdownSearchProps } from "./index.MediaSearchDropdown";
import { MediaDropdown } from "./MediaDropdown";

export function MediaSearchDropdown({ label, onClick }: IMediaDropdownSearchProps) {
    const [result, setResult] = useState<IMediaSearch|undefined>()
    const [searchContent, setSeachContent] = useState("")
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeachContent(event.target.value);

        const data = await MediaSearchByTitle(event.target.value)
        console.log({MediaSearchDropdown: data})
        setResult(data)
    };

    return (
        <div>
            <TextField
                id="MediaInputDropdown"
                label={label}
                variant="outlined"
                value={searchContent}
                onChange={handleChange}
                fullWidth
            />
            {/*
            MediaDropdown style to apply:
                position: fixed;
                width: 100%;
                z-index: 2;
            */}
            <MediaDropdown mediaSearch={result} showAnimes onClick={onClick}/>
        </div>
    )
}