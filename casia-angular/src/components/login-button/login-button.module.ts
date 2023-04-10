import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginButtonComponent } from "./login-button.component";

@NgModule({
    declarations:[LoginButtonComponent],
    imports:[CommonModule],
    exports: [LoginButtonComponent],
})
export class LoginButtonModule{}