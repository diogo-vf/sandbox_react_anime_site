import { ICharacter, IMedia, IPageInfo, IStaff, IStudio, IUser } from ".."

interface IMediaSearch {
    data: {
        staff: {
            pageInfo: IPageInfo,
            results: IStaff[],
        }
    }
}