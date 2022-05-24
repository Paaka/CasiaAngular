import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cas-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() public title : string = "This is default title"

  constructor() { }

  ngOnInit(): void {
  }

}
