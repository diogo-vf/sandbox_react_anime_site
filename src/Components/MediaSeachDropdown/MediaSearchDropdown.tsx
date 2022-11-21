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
        <>
            <TextField
                id="MediaInputDropdown"
                label={label}
                variant="outlined"
                value={searchContent}
                onChange={handleChange}
                fullWidth
            />

            <MediaDropdown mediaSearch={result} showAnimes onClick={onClick}/>
        </>
    )
}