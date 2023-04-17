import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';

import { ListButtonModule } from "../list-button/list-button.module";
import { ListItemModule } from "../list-item/list-item.module";
import { ListComponent } from "./list.component";

@NgModule({
    declarations:[ListComponent],
    imports:[
        CommonModule,

        DragDropModule,
         ListItemModule, 
         ListButtonModule, 
         ReactiveFormsModule
        ],
    exports:[ListComponent],
})
export class ListModule{ }