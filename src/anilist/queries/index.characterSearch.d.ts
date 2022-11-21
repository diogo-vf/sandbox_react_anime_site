import { ICharacter, IMedia, IPageInfo, IStaff, IStudio, IUser } from ".."

interface IMediaSearch {
    data: {
        characters: {
            pageInfo: IPageInfo,
            results: ICharacter[],
        }
    }
}