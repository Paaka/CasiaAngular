import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/components/compontents.module";
import { BoardsPageComponent } from "./boards-page.component";

@NgModule({
    declarations:[BoardsPageComponent],
    imports:[ComponentsModule],
})
export class BoardsPageModule {};