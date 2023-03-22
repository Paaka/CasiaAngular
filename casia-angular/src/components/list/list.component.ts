import { Component, Input, OnInit } from '@angular/core';
import { IList } from 'src/models/List/IList';
import { IListItem } from 'src/models/List/IListItem';

@Component({
  selector: 'cas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public list : IList;
  
  @Input() public listItems : IListItem[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }

  public onButtonClicked(): void{
    this.listItems.push({id:'1-x', title:'New item'})
  }

}
