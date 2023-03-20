import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupPageComponent } from "./group-page.component";

const routes : Routes = [
    {
        path:'',
        component:GroupPageComponent
    }
]

@NgModule({
    declarations:[GroupPageComponent],
    imports:[RouterModule.forChild(routes)],
    exports:[GroupPageComponent]
})
export class GroupPageModule{};