import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BoardPageComponent } from './board-page.component'
import { Route, RouterModule } from '@angular/router'
import { ListModule } from 'src/components/list/list.module'

const routes: Route[] = [
    {
        path: '',
        component: BoardPageComponent,
    },
]

@NgModule({
    declarations: [BoardPageComponent],
    imports: [CommonModule, ListModule, RouterModule.forChild(routes)],
    exports: [BoardPageComponent],
})
export class BoardPageModule {}
