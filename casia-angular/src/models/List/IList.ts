import { IListItem } from "./IListItem";


export interface IList {
    id: string;
    title?: string;
    listItems: IListItem[];
}
