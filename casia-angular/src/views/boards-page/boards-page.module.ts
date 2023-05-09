import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListModule } from 'src/components/list/list.module'
import { BoardsPageComponent } from './boards-page.component'

const routes: Routes = [
    {
        path: '',
        component: BoardsPageComponent,
    },
    {
        path: ':id',
        loadChildren: () =>
            import('../board-page/board-page.module').then(
                (m) => m.BoardPageModule
            ),
    },
]

@NgModule({
    declarations: [BoardsPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [BoardsPageComponent],
})
export class BoardsPageModule {}
