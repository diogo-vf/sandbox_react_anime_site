import { ICharacter, IMedia, IPageInfo, IStaff, IStudio, IUser } from ".."

interface IMediaSearch {
    data: {
        studios: {
            pageInfo: IPageInfo,
            results: IStudio[],
        }
    }
}