import { NgModule } from "@angular/core";
import { MainPageModule } from "./main-page/main-page.module";
import { BoardsPageModule } from "./boards-page/boards-page.module";
import { GroupPageModule } from "./group-page/group-page.module";
import { SettingsPageModule } from "./settings-page/settings-page.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


@NgModule({
  imports:[
    MainPageModule,
    BoardsPageModule,
    GroupPageModule,
    SettingsPageModule,
    RouterModule,
  ],
})
export class ViewsModule {}