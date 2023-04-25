import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { ListButtonModule } from '../list-button/list-button.module'
import { ListItemModule } from '../list-item/list-item.module'
import { ListComponent } from './list.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        DragDropModule,
        ListItemModule,
        ListButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [ListComponent],
})
export class ListModule {}
