import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MainPageComponent } from './main-page.component'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: 'boards',
                loadChildren: () =>
                    import('../boards-page/boards-page.module').then(
                        (m) => m.BoardsPageModule
                    ),
            },
            {
                path: 'boards/:id',
                loadChildren: () =>
                    import('../board-page/board-page.module').then(
                        (m) => m.BoardPageModule
                    ),
            },
            {
                path: 'groups',
                loadChildren: () =>
                    import('../group-page/group-page.module').then(
                        (m) => m.GroupPageModule
                    ),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('../settings-page/settings-page.module').then(
                        (m) => m.SettingsPageModule
                    ),
            },
        ],
    },
]

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        RouterModule.forChild(routes),
    ],
    declarations: [MainPageComponent],
    exports: [MainPageComponent],
})
export class MainPageModule {}
