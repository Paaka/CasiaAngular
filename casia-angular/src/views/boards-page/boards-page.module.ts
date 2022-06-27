import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentsModule } from "src/components/compontents.module";
import { BoardsPageComponent } from "./boards-page.component";

@NgModule({
    declarations:[BoardsPageComponent],
    imports:[ComponentsModule, BrowserModule],
})
export class BoardsPageModule {};