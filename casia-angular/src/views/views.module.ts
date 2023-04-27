import { NgModule } from '@angular/core'
import { MainPageModule } from './main-page/main-page.module'
import { BoardsPageModule } from './boards-page/boards-page.module'
import { GroupPageModule } from './group-page/group-page.module'
import { SettingsPageModule } from './settings-page/settings-page.module'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./main-page/main-page.module').then(
                (m) => m.MainPageModule
            ),
    },
]

@NgModule({
    imports: [
        MainPageModule,
        BoardsPageModule,
        GroupPageModule,
        SettingsPageModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        MainPageModule,
        BoardsPageModule,
        GroupPageModule,
        SettingsPageModule,
    ],
})
export class ViewsModule {}
