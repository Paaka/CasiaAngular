import { NgModule } from "@angular/core";
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatButtonModule } from "@angular/material/button";
import {  MatSidenavModule } from "@angular/material/sidenav";
import { MainPageComponent } from "./main-page.component";


@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
    ],
    declarations:[MainPageComponent],
})
export class MainPageModule {}
