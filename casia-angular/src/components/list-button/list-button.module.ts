import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ListButtonComponent } from "./list-button.component";

@NgModule({
    declarations:[ListButtonComponent],
    imports:[CommonModule, MatButtonModule],
    exports:[ListButtonComponent],
})
export class ListButtonModule{}