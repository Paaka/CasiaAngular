import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListModule } from "src/components/list/list.module";
import { BoardsPageComponent } from "./boards-page.component";

const routes: Routes = [
    {
        path:'',
        component:BoardsPageComponent,
    }
]

@NgModule({
    declarations:[BoardsPageComponent],
    imports:[CommonModule, ListModule, RouterModule.forChild(routes)],
    exports:[BoardsPageComponent]
})
export class BoardsPageModule {};