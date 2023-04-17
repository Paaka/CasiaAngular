import { IList } from "src/models/List/IList";
import { FIRST_LIST_DATA } from "./first-list.data";
import { SECOND_LIST_DATA } from './second-list.data';

export const ALL_LIST_DATA : IList[] = [
    FIRST_LIST_DATA,
    SECOND_LIST_DATA,
    {
        id:'3',
        title:'Pokemons',
        listItems:[
            {
                id:'3-1',
                title:'Hello World22!'
            },
            {
                id:'3-2',
                title:'List Note22'
            },
        ]
    },
    {
        id:'4',
        title:'MORE Pokemons',
        listItems:[
            {
                id:'4-1',
                title:'Hello World242!'
            },
            {
                id:'4-2',
                title:'List Note42'
            },
        ]
    }
];