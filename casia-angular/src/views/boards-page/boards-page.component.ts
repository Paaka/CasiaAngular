import { Component, OnInit } from '@angular/core';
import { ALL_LIST_DATA } from 'src/data/Lists/all-lists.data';
import { IList } from 'src/models/List/IList';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss']
})
export class BoardsPageComponent implements OnInit {

  allLists : IList[] = ALL_LIST_DATA;

  constructor() { }

  ngOnInit(): void {
    console.log(this.allLists);
    
  }

}
