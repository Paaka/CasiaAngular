import { Component, OnInit } from '@angular/core'
import { ALL_LIST_DATA } from 'src/data/Lists/all-lists.data'
import { IList } from 'src/models/List/IList'

@Component({
    selector: 'cas-board-page',
    templateUrl: './board-page.component.html',
    styleUrls: ['./board-page.component.scss'],
})
export class BoardPageComponent implements OnInit {
    allLists: IList[] = ALL_LIST_DATA

    constructor() {}

    ngOnInit(): void {
        console.log(this.allLists)
    }
}
