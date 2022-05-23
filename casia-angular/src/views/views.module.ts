import { NgModule } from "@angular/core";
import { MainPageModule } from "./main-page/main-page.module";
import { BoardsPageModule } from "./boards-page/boards-page.module";
import { GroupPageModule } from "./group-page/group-page.module";
import { SettingsPageModule } from "./settings-page/settings-page.module";


@NgModule({
  imports:[
    MainPageModule,
    BoardsPageModule,
    GroupPageModule,
    SettingsPageModule,
  ],
})
export class ViewsModule {}