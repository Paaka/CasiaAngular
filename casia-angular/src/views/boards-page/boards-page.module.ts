import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/components/compontents.module";
import { BoardsPageComponent } from "./boards-page.component";

const routes: Routes = [
    {
        path:'',
        component:BoardsPageComponent,
    }
]

@NgModule({
    declarations:[BoardsPageComponent],
    imports:[CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports:[BoardsPageComponent]
})
export class BoardsPageModule {};