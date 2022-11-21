import { ICharacter, IMedia, IPageInfo, IStaff, IStudio, IUser } from ".."

interface IMediaSearch {
    data: {
        users: {
            results: IUser[],
        }
    }
}