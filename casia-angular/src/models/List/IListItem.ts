import { IListToDoTask } from "./IListToDoTask";


export interface IListItem{
    id:string;
    title:string;
    description?: string;
    toDoTasks?: IListToDoTask[];
}


