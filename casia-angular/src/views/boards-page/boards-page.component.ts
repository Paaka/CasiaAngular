import { Component, OnInit } from '@angular/core';
import { FIRST_LIST_DATA } from 'src/data/Lists/first-list.data';
import { SECOND_LIST_DATA } from 'src/data/Lists/second-list.data';
import { IList } from 'src/models/List/IList';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss']
})
export class BoardsPageComponent implements OnInit {

  allLists : IList[] = [FIRST_LIST_DATA, SECOND_LIST_DATA,FIRST_LIST_DATA, SECOND_LIST_DATA];

  constructor() { }

  ngOnInit(): void {
    console.log(this.allLists);
    
  }

}
