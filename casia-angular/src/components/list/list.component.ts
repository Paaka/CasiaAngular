import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  public control: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }

  public onButtonClicked(): void{
    if(this.control.valid){
      this.listItems.push({id:`1-${this.listItems.length}`, title:this.control.value});
      this.control.setValue('');
    }
  }

}
