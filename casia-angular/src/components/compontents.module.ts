import { NgModule } from "@angular/core";
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListButtonComponent } from './list-button/list-button.component';


@NgModule({
    declarations:[ListComponent, ListItemComponent, ListButtonComponent],
    exports:[ListComponent],
  })
  export class ComponentsModule {}