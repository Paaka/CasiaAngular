import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListItemModule } from "../list-item/list-item.module";
import { ListComponent } from "./list.component";

@NgModule({
    declarations:[ListComponent],
    imports:[CommonModule, ListItemModule],
    exports:[ListComponent],
})
export class ListModule{}