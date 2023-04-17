import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { IList } from 'src/models/List/IList';
import { IListItem } from 'src/models/List/IListItem';
import { ListService } from './services/list.service';

@Component({
  selector: 'cas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[ListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input() public list : IList;
  
  @Input() public listItems : IListItem[];

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  public control: FormControl = new FormControl('', [Validators.required]);

  constructor(private listService: ListService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listService.sayHi();
  }

  public onButtonClicked(): void{
    if(this.control.valid){
      this.listItems.push({id:`1-${this.listItems.length}`, title:this.control.value});
      this.control.setValue('');
    }
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    this.cdr.detectChanges();
  }

}
