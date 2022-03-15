import { NgModule } from "@angular/core";
import {  MatToolbarModule } from "@angular/material/toolbar";
import { MainPageComponent } from "./main-page.component";


@NgModule({
    declarations:[MainPageComponent],
    imports:[MatToolbarModule],
})
export class MainPageModule {}
