import { NgModule } from "@angular/core";
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatButtonModule } from "@angular/material/button";
import {  MatSidenavModule } from "@angular/material/sidenav";
import {  MatIconModule } from "@angular/material/icon";
import { MainPageComponent } from "./main-page.component";
import { RouterModule, Routes } from "@angular/router";
import { BoardsPageComponent } from "../boards-page/boards-page.component";
import { GroupPageComponent } from "../group-page/group-page.component";
import { SettingsPageComponent } from "../settings-page/settings-page.component";

const routes : Routes = [
    {
        path:'',
        component: MainPageComponent,
        children:[
            {
                path:'boards',
                component:BoardsPageComponent,
            },
            {
                path:'groups',
                component:GroupPageComponent,
            },
            {
                path:'settings',
                component:SettingsPageComponent,
            }
        ]
    },
]


@NgModule({
    imports:[
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        RouterModule.forRoot(routes),
    ],
    declarations:[MainPageComponent],
    exports:[MainPageComponent]
})
export class MainPageModule {}
