import { ICharacter, IMedia, IPageInfo, IStaff, IStudio, IUser } from ".."

interface ISearchMedia {
    data: {
        anime?: {
            pageInfo: IPageInfo,
            results: IMedia[],
        }
        manga?: {
            pageInfo: IPageInfo,
            results: IMedia[],
        }
        characters?: {
            pageInfo: IPageInfo,
            results: ICharacter[],
        }
        staff?: {
            pageInfo: IPageInfo,
            results: IStaff[],
        }
        studios?: {
            pageInfo: IPageInfo,
            results: IStudio[],
        }
        users?: {
            results: IUser[],
        }
    }
}