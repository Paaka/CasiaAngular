import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsPageComponent } from "./settings-page.component";

const routes: Routes = [
    {
        path:'',
        component: SettingsPageComponent,
    }
]

@NgModule({
    declarations:[SettingsPageComponent],
    imports:[RouterModule.forChild(routes)],
    exports:[SettingsPageComponent],
})
export class SettingsPageModule{};