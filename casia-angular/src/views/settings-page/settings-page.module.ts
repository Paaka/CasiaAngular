import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SettingsPageComponent } from './settings-page.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
    {
        path: '',
        component: SettingsPageComponent,
    },
]

@NgModule({
    declarations: [SettingsPageComponent],
    imports: [
        RouterModule.forChild(routes),
        MatSlideToggleModule,
        ReactiveFormsModule,
    ],
    exports: [SettingsPageComponent],
})
export class SettingsPageModule {}
