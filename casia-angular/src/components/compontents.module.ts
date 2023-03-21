import { NgModule } from "@angular/core";
import { ListModule } from "./list/list.module";
import { ListItemModule } from "./list-item/list-item.module";
import { ListButtonModule } from "./list-button/list-button.module";


@NgModule({
    imports:[
      ListModule,
      ListItemModule,
      ListButtonModule,
    ],
    exports:[
      ListModule,
      ListItemModule, 
      ListButtonModule,
    ],
  })
  export class ComponentsModule {}