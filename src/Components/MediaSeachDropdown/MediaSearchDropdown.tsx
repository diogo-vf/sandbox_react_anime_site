import {TextField} from "@mui/material";
import {useState} from "react";
import {IMediaSearch} from "../../anilist/queries/index.mediaSearch";
import {MediaSearchByTitle} from "../../Common/hook/Media.hook";
import {IMediaDropdownSearchProps} from "./index.MediaSearchDropdown";
import {MediaDropdown} from "./MediaDropdown";
import {IMedia} from "../../anilist";

export function MediaSearchDropdown({label, onClick, style}: IMediaDropdownSearchProps) {
    const [result, setResult] = useState<IMediaSearch | undefined>()
    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false)
    const [searchContent, setSeachContent] = useState("")
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value
        setSeachContent(text);

        const isTextNotEmpty: boolean = text.length > 0 || text.trim() !== ""
        setDisplayDropdown(isTextNotEmpty)

        const data = await MediaSearchByTitle(event.target.value)
        console.log({MediaSearchDropdown: data})
        setResult(data)
    };

    function handleClick(media: IMedia) {
        setDisplayDropdown(false)
        onClick?.(media)
    }

    return (
        <div style={{...style, position: "relative"}}>
            <TextField
                id="MediaInputDropdown"
                label={label}
                variant="outlined"
                value={searchContent}
                onChange={handleChange}
                onFocus={(elem) => {
                    const text = elem.target.value

                    setDisplayDropdown(text.length > 0 || text.trim() !== "")
                }}
                onBlur={() => {
                    setTimeout(() => {
                        setDisplayDropdown(false)
                    }, 200)
                }}
                fullWidth
            />
            {displayDropdown && <MediaDropdown mediaSearch={result} showAnimes onClick={handleClick}/>}
        </div>
    )
}